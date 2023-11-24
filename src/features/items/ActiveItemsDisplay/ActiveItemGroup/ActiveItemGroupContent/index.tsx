import { Icon } from '@iconify/react'
import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion'
import sku from '@tf2autobot/tf2-sku'
import classNames from 'classnames'
import { forwardRef } from 'react'
import type { Item } from '~/features/items/model/item'
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
    <AccordionHeader asChild>
      <AccordionTrigger
        className="group flex w-full flex-1 items-stretch justify-start font-sans bg-[#555] py-2 pl-4 max-w-[25rem]"
        ref={forwardedRef}
      >
        <div className="bg-black rounded">
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={classNames(
              'w-20 h-20 border-4 bg-cover bg-center rounded',

              getClassnameColorByQuality(
                item ? sku.fromString(item.sku).quality : 0,
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
          {item?.buy && (
            <div className="flex gap-3 items-center">
              <Icon
                icon="material-symbols:key"
                className=" text-xl text-[#D6A62C]"
              />
              <div className="text-gray-950">{item.buy.keys}</div>
            </div>
          )}
        </div>
        <div className="flex items-center mr-2">
          <div className="p-2">
            <Icon
              icon="ph:caret-down"
              className="group-data-[state=open]:rotate-180 text-3xl text-white"
            />
          </div>
        </div>
      </AccordionTrigger>
    </AccordionHeader>
  )
})

export default ActiveItemGroupContent
