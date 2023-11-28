import { AccordionItem } from '@radix-ui/react-accordion'

import type { FC } from 'react'
import { ToggleGroup } from '@radix-ui/react-toggle-group'
import type { ActiveItemsRecord } from '..'
import type { ActiveItemGroupContentProps } from './ActiveItemGroupContent'
import ActiveItemGroupContent from './ActiveItemGroupContent'
import ActiveItemGroupDetail from './ActiveItemGroupDetail'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemGroupProps = {
  itemGroup: ItemGroup
  selectedItems: ActiveItemsRecord
  setSelectedItems: (newItems: ActiveItemsRecord) => void
}

const ActiveItemGroup: FC<ActiveItemGroupProps> = ({
  itemGroup,
  selectedItems,
  setSelectedItems,
}) => {
  function onItemsAdded(skuList: Array<string>) {
    if (skuList.length === 0) {
      const { [itemGroup.defindex]: _throwaway, ...items } = selectedItems
      return setSelectedItems({
        ...items,
      })
    }
    const newItems = Object.values(itemGroup.groups)
      .flat()
      .filter((item) => skuList.includes(item.sku))
    setSelectedItems({
      ...selectedItems,
      [itemGroup.defindex]: newItems,
    })
  }
  return (
    <AccordionItem className="" value={itemGroup.name}>
      <ToggleGroup
        onValueChange={onItemsAdded}
        type="multiple"
        aria-label="item"
      >
        <ActiveItemGroupContent {...getContentProps(itemGroup)} />
        <ActiveItemGroupDetail itemGroup={itemGroup} />
      </ToggleGroup>
    </AccordionItem>
  )
}

export default ActiveItemGroup

function getContentProps(itemGroup: ItemGroup): ActiveItemGroupContentProps {
  return {
    baseName: itemGroup.name,
    image: itemGroup.image,
  }
}
