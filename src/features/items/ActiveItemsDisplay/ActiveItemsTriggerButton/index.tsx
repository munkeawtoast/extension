import { Icon } from '@iconify/react'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import type { FC } from 'react'

export type ActiveItemsTriggerButtonProps = {
  open: boolean
  onClick: (open: boolean) => void
}

const ActiveItemsTriggerButton: FC<ActiveItemsTriggerButtonProps> = () => {
  return (
    <CollapsibleTrigger asChild>
      <button className="px-3.5 py-2.5 bg-gray-600 rounded-lg shadow-md flex-col justify-start items-end inline-flex">
        <Icon icon="ph:list-bold" className="text-white text-3xl" />
      </button>
    </CollapsibleTrigger>
  )
}

export default ActiveItemsTriggerButton
