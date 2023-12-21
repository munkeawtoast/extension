import { Icon } from '@iconify/react'
import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion'
import sku from '@tf2autobot/tf2-sku'
import classNames from 'classnames'
import { forwardRef } from 'react'
import type { Item, Qualities } from '~/features/items/model/item'
import { getClassnameColorByQuality } from '~/features/items/util'

export type ActiveItemGroupContentProps = {
  image: string
  baseName: string
  item?: Item
  onExpandDetailClicked?: () => void
}

const ActiveItemGroupContent = forwardRef<
  HTMLButtonElement,
  ActiveItemGroupContentProps
>(({ baseName, image, item }, forwardedRef) => {
  return (
    <AccordionHeader asChild className="">
      <div className="sticky shadow-lg shadow-black/20 top-0 group/acc-item flex w-full flex-1 items-stretch justify-start font-sans bg-card-body py-2 pl-4 max-w-[400px] z-10">
        <div className="bg-black rounded">
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={classNames(
              'w-20 h-20 border-4 bg-cover bg-center rounded',

              getClassnameColorByQuality(
                item
                  ? (sku.fromString(item.sku).quality as unknown as Qualities)
                  : '0',
                null,
                {
                  background: true,
                  border: true,
                }
              )
            )}
          />
        </div>
        <div className="pl-4 pt-2 flex-1">
          <div className="text-left text-white">{baseName}</div>
        </div>
        <div className="flex items-center mr-2">
          <AccordionTrigger className="p-2" ref={forwardedRef}>
            <Icon
              icon="ph:caret-down"
              className="group-data-[state=open]/acc-item:-rotate-180 transition text-3xl text-white"
            />
          </AccordionTrigger>
        </div>
      </div>
    </AccordionHeader>
  )
})

export default ActiveItemGroupContent
