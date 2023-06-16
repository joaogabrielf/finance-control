import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Transaction } from '../../components/Transaction'
import { SearchForm } from './Components/SearchForm'

export function Home() {
  return (
    <div className="">
      <Header />
      <div className="mx-auto my-0 w-full max-w-[1120px] px-6 py-0">
        <Summary />
        <SearchForm />
        <main className="mt-6 flex flex-col gap-2">
          <Transaction variant="income" />
          <Transaction variant="income" />
          <Transaction variant="outcome" />
          <Transaction variant="outcome" />
        </main>
      </div>
    </div>
  )
}
