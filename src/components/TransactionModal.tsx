import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'

export function TransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-full w-full bg-[#00000075] " />
      <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-gray-800 p-10 pb-12">
        <Dialog.Title className="text-2xl font-bold">
          New Transaction
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent leading-none text-gray-500">
          <X size={24} />
        </Dialog.Close>

        <form className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Description"
            className="rounded-[6px] border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Price"
            className="rounded-[6px] border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Category"
            className="rounded-[6px] border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
          />

          <RadioGroup.Root className="mt-2 grid grid-cols-2 gap-4">
            <RadioGroup.Item
              value="income"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-[6px] border-0 bg-gray-700 p-4 text-gray-300 transition-colors data-[state=checked]:bg-green-500 data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600"
            >
              <ArrowCircleUp
                size={24}
                className="text-green-300 group-data-[state=checked]:text-white"
              />
              Income
            </RadioGroup.Item>
            <RadioGroup.Item
              value="outcome"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-[6px] border-0 bg-gray-700 p-4 text-gray-300 transition-colors data-[state=checked]:bg-red-500 data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600"
            >
              <ArrowCircleDown
                size={24}
                className="text-red-300 group-data-[state=checked]:text-white"
              />
              Outcome
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button
            type="submit"
            className="mt-6 h-[58px] cursor-pointer rounded-[6px] border-0 bg-green-500 px-5 py-0 text-white transition-colors duration-200 hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}