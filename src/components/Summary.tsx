import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../utils/formatter'
import { useSummary } from '../hooks/useSummary'
import { ReactNode } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'
import { formatDistanceToNow } from 'date-fns'

interface SummaryItemProps {
  id: number
  description: string
  icon: ReactNode
  color: string
  price: number
  date: string
}

export function Summary() {
  const summary = useSummary()

  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const lastDate = (prop: string) => {
    const lastIncome = transactions.find(
      (transaction) => transaction.type === prop,
    )

    if (!lastIncome) return undefined

    return lastIncome.createdAt
  }

  const lastIncome = lastDate('income') ?? ''

  const lastOutcome = lastDate('outcome') ?? ''

  const summaryItems: SummaryItemProps[] = [
    {
      id: 1,
      description: 'Income',
      icon: <ArrowCircleUp size={32} color="#00b37e" />,
      color: 'bg-gray-600',
      price: summary.income,
      date: lastIncome,
    },
    {
      id: 2,
      description: 'Outcome',
      icon: <ArrowCircleDown size={32} color="#f75a68" />,
      color: 'bg-gray-600',
      price: summary.outcome,
      date: lastOutcome,
      // date: new Date().toISOString(),
    },
    {
      id: 3,
      description: 'Total',
      icon: <CurrencyDollar size={32} color="#fff" />,
      color: summary.total >= 0 ? 'bg-green-700' : 'bg-red-700',
      price: summary.total,
      date: '',
    },
  ]

  return (
    <div className="grid translate-y-[-5rem] grid-cols-3 gap-8 sm:grid-cols-[1fr_1fr_1fr] sm:overflow-auto">
      {summaryItems.map((item) => (
        <div
          key={item.id}
          className={`rounded-[6px] p-8 sm:flex sm:h-[150px] sm:w-[280px] sm:flex-col sm:justify-between sm:p-6 sm:pl-8 ${item.color}`}
        >
          <header className="flex items-center justify-between text-gray-300">
            <span>{item.description}</span>
            {item.icon}
          </header>

          <strong className="mt-4 block text-[2rem] sm:mt-3">
            {priceFormatter.format(item.price)}
          </strong>
          <span className="hidden sm:block sm:text-sm sm:text-gray-500">
            {item.date &&
              `Last entry ${formatDistanceToNow(new Date(item.date), {
                addSuffix: true,
              })}`}
          </span>
        </div>
      ))}
    </div>
  )
}
