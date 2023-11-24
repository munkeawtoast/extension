import { AccordionContent } from '@radix-ui/react-accordion'
import { forwardRef } from 'react'

export type ActiveItemGroupDetailAccordionItemContentProps = {
  children: React.ReactNode
}

const ActiveItemGroupDetailAccordionItemContent = forwardRef<
  HTMLDivElement,
  ActiveItemGroupDetailAccordionItemContentProps
>(({ children }, forwardedRef) => {
  return <AccordionContent ref={forwardedRef}>{children}</AccordionContent>
})

export default ActiveItemGroupDetailAccordionItemContent
