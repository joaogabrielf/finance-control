import { Transaction } from '../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../utils/formatter'

export function TransactionList(transaction: Transaction) {
  const color =
    transaction.type === 'income' ? 'text-green-300' : 'text-red-300'

  return (
    <div className="flex w-full border-separate border-spacing-y-2">
      <span className="flex-[4] rounded-l-[6px] bg-gray-700 p-5">
        {transaction.description}
      </span>
      <span className={`flex-1 bg-gray-700 p-5 ${color}`}>
        {transaction.type === 'outcome' && (
          <span className="ml-[-0.47rem]">- </span>
        )}
        {priceFormatter.format(transaction.price)}
      </span>
      <span className="flex-1 bg-gray-700 p-5">{transaction.category}</span>
      <span className="flex-1 rounded-r-[6px] bg-gray-700 p-5">
        {dateFormatter.format(new Date(transaction.createdAt))}
      </span>
    </div>
  )
}
