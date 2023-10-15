// import type { LoadoutTFItemManager } from '../../types/loadoutTf/loadoutTf'
import { createRoot } from 'react-dom/client'
import PricingsInjector from '../views/PricingsInjector'

async function waitForEl(selector: string): Promise<Element> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector)!)
    }

    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(selector).length) {
        observer.disconnect()
        resolve(document.querySelector(selector)!)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

export default async function itemInjector() {
  const itemsContainer = await waitForEl('.item-manager-items-inner')
  const root = createRoot(itemsContainer)
  root.render(<PricingsInjector target={itemsContainer} />)
}
