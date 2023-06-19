import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionData {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string, page?: number) => Promise<void>
  createTransaction: (data: CreateTransactionData) => Promise<void>
  currentPage: number
  changePage: (page: number) => void
  transactionsInPage: Transaction[]
  totalPages: number
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transactionsInPage, setTransactionsInPage] = useState<Transaction[]>(
    [],
  )
  const [currentPage, setPage] = useState(1)

  const TRANSACTIONS_PER_PAGE = 7

  const fetchTransactions = useCallback(async (query?: String) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const { description, category, price, type } = data
    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((oldState) => [response.data, ...oldState])
  }, [])

  const paginatedTransactions = useCallback(
    (page: number) => {
      const start = (page - 1) * TRANSACTIONS_PER_PAGE
      const end = start + TRANSACTIONS_PER_PAGE

      return transactions.slice(start, end)
    },
    [transactions],
  )

  const getTotalPages = useCallback(() => {
    return Math.ceil(transactions.length / TRANSACTIONS_PER_PAGE)
  }, [transactions])

  const totalPages = getTotalPages()

  const changePage = useCallback(
    (page: number) => {
      setPage(page)
      setTransactionsInPage(paginatedTransactions(page))
    },
    [paginatedTransactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  useEffect(() => {
    setTransactionsInPage(paginatedTransactions(currentPage))
  }, [currentPage, paginatedTransactions])

  return (
    <TransactionContext.Provider
      value={{
        currentPage,
        changePage,
        transactions,
        fetchTransactions,
        createTransaction,
        totalPages,
        transactionsInPage,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
