import logo from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { TransactionModal } from './TransactionModal'

export function Header() {
  return (
    <header className="bg-gray-900 px-0 pb-[7.5rem] pt-10">
      <div className="mx-auto my-0 flex w-full max-w-[1120px] items-center justify-between px-6 py-0">
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-[50px] cursor-pointer rounded-[6px] border-0 bg-green-500 px-5 py-0 font-bold text-white transition-colors duration-300 hover:bg-green-700 hover:duration-100">
              New Transaction
            </button>
          </Dialog.Trigger>
          <TransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
