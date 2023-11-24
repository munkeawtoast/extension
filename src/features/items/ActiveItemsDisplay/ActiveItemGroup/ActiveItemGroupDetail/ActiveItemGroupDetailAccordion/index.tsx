import { Accordion, AccordionItem } from '@radix-ui/react-accordion'
import { type FC } from 'react'
import ActiveItemGroupDetailAccordionItemTrigger from './ActiveItemGroupDetailAccordionItemTrigger'

type ActiveItemGroupDetailAccordionProps = {}

// TODO: Implement this component
const ActiveItemGroupDetailAccordion: FC<
  ActiveItemGroupDetailAccordionProps
> = () => {
  return (
    <>
      <Accordion type="single">
        <AccordionItem value="quality">
          <ActiveItemGroupDetailAccordionItemTrigger title="quality" />
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default ActiveItemGroupDetailAccordion
