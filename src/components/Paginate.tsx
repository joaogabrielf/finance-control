import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

export function Paginate() {
  const totalPages = useContextSelector(TransactionContext, (context) => {
    return context.totalPages
  })

  const changePage = useContextSelector(TransactionContext, (context) => {
    return context.changePage
  })

  const currentPage = useContextSelector(TransactionContext, (context) => {
    return context.currentPage
  })

  const pageNumberTotal = [...Array(totalPages).keys()].map((x) => ++x)
  let pageNumber

  if (currentPage === totalPages) {
    pageNumber = pageNumberTotal.slice(currentPage - 3, totalPages)
  } else if (currentPage === totalPages - 1) {
    pageNumber = pageNumberTotal.slice(currentPage - 2, totalPages + 1)
  } else {
    pageNumber = pageNumberTotal.slice(currentPage - 1, currentPage + 2)
  }

  return (
    <ul className="flex gap-2">
      {pageNumber.map((page) => (
        <li key={page}>
          <button
            onClick={() => {
              changePage(page)
            }}
            title={`Go to page ${page}`}
            className={`h-10 w-10 rounded-[6px] bg-gray-700 active:bg-green-700 ${
              currentPage === page ? 'bg-green-500' : ''
            }`}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  )
}
