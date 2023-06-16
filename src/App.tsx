import { TransactionsProvider } from './contexts/TransactionsContext'
import { Home } from './pages/Home/Home'

export function App() {
  return (
    <>
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </>
  )
}
