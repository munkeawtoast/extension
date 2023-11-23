import { AccordionHeader, AccordionTrigger } from '@radix-ui/react-accordion'
import sku from '@tf2autobot/tf2-sku'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { getItemClassnameColor } from '~/features/items/util/items'
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
      <AccordionHeader className="font-sans flex bg-[#555] py-2 pl-4 max-w-100">
        <AccordionTrigger className="flex " ref={forwardedRef}>
          <div className="bg-black rounded">
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className={classNames(
                'w-26 h-26 border-5 bg-cover bg-center rounded',
                getItemClassnameColor(
                  sku.fromString(item!.sku).quality,
                  null,
                  true
                )
              )}
            />
          </div>
          <div className="px-4 py-2 flex-1">
            <div className="text-white">{baseName}</div>
            {item?.buy && (
              <div className="flex gap-3 items-center">
                <div className="i-material-symbols:key text-2xl bg-[#D6A62C]" />
                <div className="">{item.buy.keys}</div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mr-2">
            <button className="p-2">
              <div className="i-bi:chevron-down text-3xl bg-white" />
            </button>
          </div>
        </AccordionTrigger>
      </AccordionHeader>
    )
  }
)

export default ActiveItemContent
