import { useContext } from 'react'
import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { TransactionList } from '../components/TransactionList'
import { TransactionContext } from '../contexts/TransactionsContext'
import { SearchForm } from '../components/SearchForm'

export function Home() {
  const { transactions } = useContext(TransactionContext)

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
      </div>
    </div>
  )
}