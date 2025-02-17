import { AccordionItem } from '@radix-ui/react-accordion'

import { ToggleGroup } from '@radix-ui/react-toggle-group'
import type { SelectedItemsRecord } from '..'
import type { ActiveItemGroupContentProps } from './ActiveItemGroupContent'
import ActiveItemGroupContent from './ActiveItemGroupContent'
import ActiveItemGroupDetail from './ActiveItemGroupDetail'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemGroupProps = {
  itemGroup: ItemGroup
  selectedItems: SelectedItemsRecord
  setSelectedItems: (newItems: SelectedItemsRecord) => void
  skus: Array<string>
  setSkus: (newSkus: Array<string>) => void
}

const ActiveItemGroup: React.FC<ActiveItemGroupProps> = ({
  itemGroup,
  selectedItems,
  setSelectedItems,
  skus,
  setSkus,
}) => {
  function onItemsChange(skuList: Array<string>) {
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
    <AccordionItem value={itemGroup.name}>
      <ToggleGroup
        onValueChange={onItemsChange}
        value={skus}
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
