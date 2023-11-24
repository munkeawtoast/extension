import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import type { FC } from 'react'
import { useState } from 'react'
import ActiveItemsDisplayContent from './ActiveItemsDisplayContent'
import ActiveItemsDisplayFooter from './ActiveItemsDisplayFooter'
import ActiveItemsDisplayHeader from './ActiveItemsDisplayHeader'
import ActiveItemsTriggerButton from './ActiveItemsTriggerButton'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemsDisplayProps = {
  itemGroups: Array<ItemGroup>
}

const ActiveItemsDisplay: FC<ActiveItemsDisplayProps> = ({ itemGroups }) => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible
      className="flex flex-col items-end"
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsibleContent asChild>
        <div className="mb-3 shadow-md w-96">
          <ActiveItemsDisplayHeader />
          <ActiveItemsDisplayContent itemGroups={itemGroups} />
          <ActiveItemsDisplayFooter />
        </div>
      </CollapsibleContent>
      <ActiveItemsTriggerButton open={open} onClick={setOpen} />
    </Collapsible>
  )
}

export default ActiveItemsDisplay
