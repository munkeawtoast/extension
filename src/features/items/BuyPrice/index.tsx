import type { FC } from 'react'
import { Icon, type IconProps } from '@iconify/react'
import classNames from 'classnames'
import type { Currencies } from '../model/item'

export type BuyPriceProps = {
  price: Currencies
  className?: string
  containerClassName?: string
}

const BuyPrice: FC<BuyPriceProps> = ({
  price,
  className,
  containerClassName,
}) => {
  const unitIconMap: Record<keyof Currencies, IconProps> = {
    keys: { icon: 'material-symbols:key', className: 'text-currency-key' },
    metal: { icon: 'streamline:gold-solid', className: 'text-currency-metal' },
  }
  return (
    <div className={classNames('text-white', containerClassName)}>
      {Object.entries(price).map(([unit, amount]) => (
        <div className={classNames('flex items-center space-x-1', className)}>
          <Icon {...unitIconMap[unit as keyof Currencies]} />
          <span>{amount}</span>
        </div>
      ))}
    </div>
  )
}

export default BuyPrice
