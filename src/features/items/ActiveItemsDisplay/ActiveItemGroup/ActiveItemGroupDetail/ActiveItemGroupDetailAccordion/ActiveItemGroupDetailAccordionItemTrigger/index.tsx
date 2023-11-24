import { Icon } from '@iconify/react'
import { AccordionTrigger } from '@radix-ui/react-accordion'
import { forwardRef } from 'react'
import StyleQualityColoredActionRowLikeButton from '../../../StyleQualityColoredActionRowLikeButton'

export type ActiveItemGroupDetailAccordionItemProps = { title: string }

const ActiveItemGroupDetailAccordionItemTrigger = forwardRef<
  HTMLButtonElement,
  ActiveItemGroupDetailAccordionItemProps
>(({ title }, forwardedRef) => {
  return (
    <AccordionTrigger asChild>
      <StyleQualityColoredActionRowLikeButton
        quality={15}
        variant="transparent"
        size="3xl"
        title={title}
        ref={forwardedRef}
        children={({ isOn }) => (
          <div className="flex-1">
            <Icon icon="ph:caret-down" className="text-3xl" />
          </div>
        )}
      />
    </AccordionTrigger>
  )
})

export default ActiveItemGroupDetailAccordionItemTrigger
