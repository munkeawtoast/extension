import { Accordion } from '@radix-ui/react-accordion'
import type { FC } from 'react'
import ActiveItemGroup from '../ActiveItemGroup'
import type { ItemGroup } from '~/features/items/model/ItemGroup'

export type ActiveItemsDisplayContentProps = {
  itemGroups: Array<ItemGroup>
}

const ActiveItemsDisplayContent: FC<ActiveItemsDisplayContentProps> = ({
  itemGroups,
}) => {
  return (
    <Accordion collapsible type="single">
      {itemGroups.map((itemGroup) => (
        <ActiveItemGroup itemGroup={itemGroup} />
      ))}
    </Accordion>
  )
}

export default ActiveItemsDisplayContent
