import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../utils/formatter'
import { useSummary } from '../hooks/useSummary'

export function Summary() {
  const summary = useSummary()
  return (
    <div className="grid translate-y-[-5rem] grid-cols-3 gap-8">
      <div className="rounded-[6px] bg-gray-600 p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong className="mt-4 block text-[2rem]">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>
      <div className="rounded-[6px] bg-gray-600 p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong className="mt-4 block text-[2rem]">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>
      <div className="rounded-[6px] bg-green-700 p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong className="mt-4 block text-[2rem]">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </div>
  )
}
