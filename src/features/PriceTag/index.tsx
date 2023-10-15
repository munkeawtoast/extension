import Tag from './Tag'
import type { GroupedPrice } from './hooks/useGroupedPricings'

const PriceTag = ({ itemPrices }: { itemPrices: GroupedPrice }) => {
  return (
    <div className="absolute right-0 top-0 h-[20px] flex items-stretch overflow-hidden rounded-bl-[12px]">
      {itemPrices.groups['6'].map((price) => (
        <Tag price={price} />
      ))}
    </div>
  )
}
export default PriceTag
