import { AccordionContent } from '@radix-ui/react-accordion'
import { forwardRef } from 'react'

export type ActiveItemContentProps = {}

// TODO: Implement this component
const ActiveItemDetail = forwardRef<HTMLDivElement, ActiveItemContentProps>(
  (props, forwardedRef) => {
    return <AccordionContent></AccordionContent>
  }
)

export default ActiveItemDetail
