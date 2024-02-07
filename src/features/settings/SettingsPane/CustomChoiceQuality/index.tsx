import { useState } from 'react'
import type { FilterFunction } from '../../filter'
import StyledCustomChoice from '../StyledCustomChoice'
import type { Qualities } from '~/features/items/model/item'

export type CustomChoiceQualityProps = {}

export type CustomChiceQualityFilterFunction = FilterFunction

export const CustomChoiceQuality: React.FC<CustomChoiceQualityProps> = () => {
  const [quality, setQuality] = useState<Qualities>()

  return (
    <StyledCustomChoice>
      <span>Quality</span>
    </StyledCustomChoice>
  )
}
