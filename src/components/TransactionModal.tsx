import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const transactionFormSchema = z.object({
  description: z.string().min(1),
  price: z.number(),
  category: z.string().min(2),
  type: z.enum(['income', 'outcome']),
})

type TransactionFormInputs = z.infer<typeof transactionFormSchema>

interface inputTextProps {
  id: number
  name: 'description' | 'price' | 'category'
  placeholder: string
  valueAsNumber?: boolean
}

export function TransactionModal() {
  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TransactionFormInputs>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: TransactionFormInputs) {
    const { description, category, price, type } = data

    await createTransaction({ category, description, price, type })

    reset()
  }

  const inputText: inputTextProps[] = [
    {
      id: 1,
      name: 'description',
      placeholder: 'Description',
    },
    {
      id: 2,
      name: 'price',
      placeholder: 'Price',
      valueAsNumber: true,
    },
    {
      id: 3,
      name: 'category',
      placeholder: 'Category',
    },
  ]

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-full w-full bg-[#00000075] " />
      <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-[6px] bg-gray-800 p-10 pb-12 sm:min-w-[calc(100%-32px)]">
        <Dialog.Title className="text-2xl font-bold">
          New Transaction
        </Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer border-0 bg-transparent leading-none text-gray-500">
          <X size={24} />
        </Dialog.Close>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          {inputText.map((input) => (
            <input
              key={input.id}
              type={input.valueAsNumber ? 'number' : 'text'}
              placeholder={input.placeholder}
              className="rounded-[6px] border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
              {...register(input.name, {
                valueAsNumber: input.valueAsNumber ?? false,
              })}
            />
          ))}

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className="mt-2 grid grid-cols-2 gap-4"
                  onValueChange={field.onChange}
                  value={field.value}
                >
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
                    className="group flex cursor-pointer items-center justify-center gap-2 rounded-[6px] border-0 bg-gray-700 p-4 text-gray-300 shadow-red-500 transition-colors data-[state=checked]:bg-red-500 data-[state=checked]:text-white data-[state=unchecked]:hover:bg-gray-600"
                  >
                    <ArrowCircleDown
                      size={24}
                      className="text-red-300 group-data-[state=checked]:text-white"
                    />
                    Outcome
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 h-[58px] cursor-pointer rounded-[6px] border-0 bg-green-500 px-5 py-0 text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 [&:not(:disabled)]:bg-green-700"
          >
            Register
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
