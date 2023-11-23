import { useEffect, useState } from 'react'
import { renderToString } from 'react-dom/server'
import PriceTag from '~/features/PriceTag'
import usePricings from '~/features/PriceTag/hooks/stores/usePricings'

function elementFromJsx(component: JSX.Element) {
  const template = document.createElement('template')
  template.innerHTML = renderToString(component)
  return template.content.firstChild as Element
}

const PricingsInjector = ({ target }: { target: Element }) => {
  const { prices, lastFetchedDate, fetchPrices, state, reset } = usePricings()
  const [elements, setElements] = useState(new Set<Element>())

  function addPricingTags() {
    const children = target.querySelectorAll(
      'item-manager-item'
    ) as unknown as (Element & { title?: string })[]
    children.forEach((itemManager) => {
      if (!itemManager.title) {
        return
      }
      const itemName = itemManager.title.split(' (')[0]
      const itPrices = prices.find((p) => p.name === itemName)

      if (!itPrices) {
        return
      }
      const element = elementFromJsx(<PriceTag itemPrices={itPrices} />)
      itemManager.append(element)
      setElements((current) => {
        current.add(element)
        return current
      })
    })
  }

  useEffect(() => {
    target.addEventListener('scroll', addPricingTags)
    fetchPrices()
  }, [])
  useEffect(() => {
    elements.forEach((el) => {
      el.remove()
    })
    addPricingTags()
  }, [prices])
  return <></>
}
export default PricingsInjector
