import tf2Sku from '@tf2autobot/tf2-sku'
import { useState } from 'react'
import type { Price } from '~/api/common/price'

const Tag = ({ price }: { price: Price }) => {
  const [sku] = useState<tf2Sku>(tf2Sku.fromString(price.sku))
  const backpackTfUrlObject = new URL('https://next.backpack.tf/stats')
  backpackTfUrlObject.searchParams.append('item', String(sku.defindex))
  backpackTfUrlObject.searchParams.append('quality', String(sku.quality))

  return (
    <a
      target="_blank"
      href={backpackTfUrlObject.toString()}
      className={`gap-2 hover:brightness-150 flex text-[12px] p-3 transition items-center price-tag-tag-quality_${
        sku.quality
      } ${
        !sku.craftable
          ? 'bg-gradient-repeating-linear bg-gradient-[45deg,#292725,#292725_10px,rgb(67,67,67)_10px,rgb(67,67,67)_20px]'
          : 'bg-[#292725]'
      }`}
    >
      {price.buy?.keys !== 0 && (
        <div>
          <img
            className="w-[20px] h-[20px]"
            src="https://steamcdn-a.akamaihd.net/apps/440/icons/key.be0a5e2cda3a039132c35b67319829d785e50352.png"
          />
          <span>{price.buy?.keys}</span>
        </div>
      )}
      {price.buy?.metal !== 0 && (
        <div>
          <img
            className="w-[20px] h-[20px]"
            src="https://steamcdn-a.akamaihd.net/apps/440/icons/pile_of_junk3.6f7e42fae0507065287c7b5c51aa05c2420161ba.png"
          />
          <span>{price.buy?.metal}</span>
        </div>
      )}
    </a>
  )
}

export default Tag
