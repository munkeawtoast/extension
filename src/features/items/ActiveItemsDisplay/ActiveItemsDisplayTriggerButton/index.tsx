import { Icon } from '@iconify/react'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import type { FC } from 'react'

export type ActiveItemsDetailTriggerButtonProps = {}

const ActiveItemsDetailTriggerButton: FC<
  ActiveItemsDetailTriggerButtonProps
> = () => {
  return (
    <CollapsibleTrigger asChild>
      <button className="mb-3 group/open-button transition active:scale-105 active:translate-y-px px-3.5 py-2.5 bg-gray-600 rounded-lg shadow-md flex-col justify-start items-end inline-flex">
        <Icon
          icon="ph:list-bold"
          className="group-active/open-button:scale-105  transition text-white text-3xl"
        />
      </button>
    </CollapsibleTrigger>
  )
}

export default ActiveItemsDetailTriggerButton
