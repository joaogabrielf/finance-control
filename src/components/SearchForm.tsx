import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <form
      className="flex items-center gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Rent"
        className="flex-1 rounded-[6px] border-0 bg-gray-900 p-4 text-green-300 placeholder:text-gray-500"
        {...register('query')}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex cursor-pointer items-center gap-3 rounded-[6px] border border-solid border-green-300 bg-transparent px-6 py-3 font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-70 [&:not(:disabled)]:hover:border-green-500 [&:not(:disabled)]:hover:bg-green-500 [&:not(:disabled)]:hover:text-white"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
