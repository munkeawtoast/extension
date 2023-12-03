import { Accordion } from '@radix-ui/react-accordion'
import type { FC } from 'react'
import ActiveItemGroup from '../ActiveItemGroup'
import type { ActiveItemsRecord } from '..'
import { useGetAllGroupedPricings } from '../../hooks/api/query'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemsDisplayContentProps = {
  itemGroups: Array<ItemGroup>
  selectedItems: ActiveItemsRecord
  setSelectedItems: (newItems: ActiveItemsRecord) => void
}

const ActiveItemsDisplayContent: FC<ActiveItemsDisplayContentProps> = ({
  itemGroups,
  selectedItems,
  setSelectedItems,
}) => {
  const { status, error } = useGetAllGroupedPricings()

  if (itemGroups.length < 1) {
    return (
      <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
        Pick items to see them here.
      </div>
    )
  }
  switch (true) {
    case status === 'pending':
      return (
        <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
          Loading...
        </div>
      )
    case status === 'error':
      return (
        <div className="text-center bg-card-body text-tf2_settings-title items-center justify-center flex h-48">
          Error!
        </div>
      )
  }

  return (
    <Accordion
      collapsible
      type="single"
      className="max-h-[32rem] overflow-scroll"
    >
      {itemGroups.map((itemGroup) => (
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
