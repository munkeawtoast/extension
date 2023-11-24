import { AccordionItem } from '@radix-ui/react-accordion'

import type { FC } from 'react'
import { useState } from 'react'
import type { ActiveItemGroupContentProps } from './ActiveItemGroupContent'
import ActiveItemGroupContent from './ActiveItemGroupContent'
import type { ItemGroup } from '~/model/item/ItemGroup'
import type { Item } from '~/model/item/item'

export type ActiveItemGroupProps = {
  itemGroup: ItemGroup
}

const ActiveItemGroup: FC<ActiveItemGroupProps> = ({ itemGroup }) => {
  const [activeItem, setActiveItem] = useState<Item | null>(null)
  return (
    <AccordionItem value={itemGroup.name}>
      <ActiveItemGroupContent {...getContentProps(itemGroup)} />
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
