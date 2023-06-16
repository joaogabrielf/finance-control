import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Rent"
        className="flex-1 rounded-[6px] border-0 bg-gray-900 p-4 text-green-300 placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="flex items-center gap-3 rounded-[6px] border border-solid border-green-300 bg-transparent px-6 py-3 font-bold transition-colors duration-200 hover:border-green-500 hover:bg-green-500 hover:text-white"
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </form>
  )
}
