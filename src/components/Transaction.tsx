interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export function Transaction({ variant }: PriceHighlightProps) {
  const color = variant === 'income' ? 'text-green-300' : 'text-red-300'

  return (
    <div className="flex w-full border-separate border-spacing-y-2">
      <span className="flex-[4] rounded-l-[6px] bg-gray-700 p-5">
        Desenvolvimento de Site
      </span>
      <span className={`flex-1 bg-gray-700 p-5 ${color}`}>R$ 14.000,00</span>
      <span className="flex-1 bg-gray-700 p-5">Venda</span>
      <span className="flex-1 rounded-r-[6px] bg-gray-700 p-5">13/04/2022</span>
    </div>
  )
}
