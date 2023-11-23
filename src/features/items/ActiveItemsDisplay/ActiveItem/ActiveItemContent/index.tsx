import { Icon } from '@iconify/react'
import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion'
import sku from '@tf2autobot/tf2-sku'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { getClassnameColorByQuality } from '~/features/items/util/items'
import type { Item } from '~/model/item/item'

export type ActiveItemContentProps = {
  image: string
  baseName: string
  item?: Item
  onExpandDetailClicked?: () => void
}

const ActiveItemContent = forwardRef<HTMLButtonElement, ActiveItemContentProps>(
  ({ baseName, image, item }, forwardedRef) => {
    return (
      <AccordionHeader className="font-sans flex bg-[#555] py-2 pl-4 max-w-[25rem]">
        <AccordionTrigger
          className="flex flex-1 justify-start"
          ref={forwardedRef}
        >
          <div className="bg-black rounded">
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className={classNames(
                'w-24 h-24 border-4 bg-cover bg-center rounded',
                getClassnameColorByQuality(
                  sku.fromString(item!.sku).quality,
                  null,
                  {
                    background: true,
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
                  className=" text-2xl text-[#D6A62C]"
                />
                <div className="text-gray-950">{item.buy.keys}</div>
              </div>
            )}
          </div>
          <div className="flex h-full items-center justify-center mr-2">
            <div className="p-2">
              <Icon icon="ph:caret-down" className="text-3xl text-white" />
            </div>
          </div>
        </AccordionTrigger>
      </AccordionHeader>
    )
  }
)

export default ActiveItemContent
