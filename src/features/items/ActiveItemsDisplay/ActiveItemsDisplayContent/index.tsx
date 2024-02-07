import { Accordion } from '@radix-ui/react-accordion'
import type { FC } from 'react'
import ActiveItemGroup from '../ActiveItemGroup'
import type { SelectedItemsRecord } from '..'
import { useGetAllGroupedPricings } from '../../hooks/query'
import { useActiveItemsStore } from '../../stores/useActiveItemsStore'

export type ActiveItemsDisplayContentProps = {
  selectedItems: SelectedItemsRecord
  setSelectedItems: (newItems: SelectedItemsRecord) => void
  skus: Array<string>
  setSkus: (newSkus: Array<string>) => void
}

const ActiveItemsDisplayContent: FC<ActiveItemsDisplayContentProps> = ({
  selectedItems,
  setSelectedItems,
  skus,
  setSkus,
}) => {
  const { isError, isPending, data } = useGetAllGroupedPricings()
  const activeItems = useActiveItemsStore((state) => state.activeItems)

  if (isPending) {
    return (
      <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
        Loading...
      </div>
    )
  }
  if (isError) {
    return (
      <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
        Error!
      </div>
    )
  }

  if (activeItems.length === 0) {
    return (
      <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
        Pick items to see them here.
      </div>
    )
  }

  return (
    <Accordion
      collapsible
      type="single"
      className="max-h-[512px] overflow-y-auto"
    >
      {activeItems.map((itemGroup) => (
        <ActiveItemGroup
          key={itemGroup.defindex}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          itemGroup={itemGroup}
        />
      ))}
    </Accordion>
  )
}

export default ActiveItemsDisplayContent
