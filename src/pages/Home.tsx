import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { TransactionList } from '../components/TransactionList'
import { TransactionContext } from '../contexts/TransactionsContext'
import { SearchForm } from '../components/SearchForm'
import { useContextSelector } from 'use-context-selector'
import { Paginate } from '../components/Paginate'
import { CaretLeft, CaretRight } from 'phosphor-react'

export function Home() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactionsInPage
  })

  const currentPage = useContextSelector(TransactionContext, (context) => {
    return context.currentPage
  })

  const totalPages = useContextSelector(TransactionContext, (context) => {
    return context.totalPages
  })

  const changePage = useContextSelector(TransactionContext, (context) => {
    return context.changePage
  })

  const isDisabledLeft = currentPage === 1
  const isDisabledRight = currentPage === totalPages

  console.log(isDisabledLeft, isDisabledRight)

  function handleLeftClickPage() {
    if (!isDisabledLeft) changePage(currentPage - 1)
  }

  function handleRightClickPage() {
    if (!isDisabledRight) changePage(currentPage + 1)
  }

  return (
    <div className="">
      <Header />
      <div className="mx-auto my-0 w-full max-w-[1120px] px-6 py-0">
        <Summary />
        <SearchForm />
        <main className="mt-6 flex flex-col gap-2">
          {transactions.map((transaction) => {
            return <TransactionList key={transaction.id} {...transaction} />
          })}
        </main>
        <footer className="mt-10 flex items-center justify-center gap-4">
          <button
            className="text-green-500 disabled:text-gray-700 [&:not(:disabled):hover]:cursor-pointer"
            disabled={isDisabledLeft}
            onClick={handleLeftClickPage}
          >
            <CaretLeft size={24} />
          </button>
          <Paginate />
          <button
            className="text-green-500 disabled:text-gray-700 [&:not(:disabled):hover]:cursor-pointer"
            disabled={isDisabledRight}
            onClick={handleRightClickPage}
          >
            <CaretRight size={24} />
          </button>
        </footer>
      </div>
    </div>
  )
}
