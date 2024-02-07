import { forwardRef } from 'react'
import { AccordionContent } from '@radix-ui/react-accordion'
import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import ActiveItemGroupDetailCategory from './ActiveItemGroupDetailCategory'
import ActiveItemGroupDetailQualityCollapsibleHeader from './ActiveItemGroupDetailQualityCollapsibleHeader'
import ActiveItemGroupDetailEntryChoice from './ActiveItemGroupDetailEntryChoice'
import type { ItemGroup } from '~/features/items/model/ItemGroup'
import type { Qualities } from '~/features/items/model/item'

export type ActiveItemGroupDetailProps = {
  itemGroup: ItemGroup
}

const ActiveItemGroupDetail = forwardRef<
  HTMLDivElement,
  ActiveItemGroupDetailProps
>((props, forwardedRef) => {
  const { itemGroup } = props
  return (
    <AccordionContent
      className="bg-item_group-body -z-10 shadow-inner p-2"
      ref={forwardedRef}
    >
      <ActiveItemGroupDetailCategory title="Quality">
        <>
          {Object.entries(itemGroup.groups)
            .filter(([, items]) => items.length > 0)
            .map(([quality, items]) => (
              <Collapsible key={quality} className="group/quality">
                <ActiveItemGroupDetailQualityCollapsibleHeader
                  quality={quality as Qualities}
                  count={items.length}
                />
                <CollapsibleContent className="flex gap-1 pt-1 group-data-[state=open]/quality:pb-4 flex-col">
                  {items.map((item) => (
                    <ActiveItemGroupDetailEntryChoice
                      key={item.sku}
                      item={item}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      </ActiveItemGroupDetailCategory>
    </AccordionContent>
  )
})

export default ActiveItemGroupDetail
