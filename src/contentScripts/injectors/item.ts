import type { LoadoutTFItemManager } from '../../types/loadoutTf/loadoutTf'

export default async function itemInjector() {
  async function waitForEl(selector: string): Promise<NodeListOf<Element>> {
    return new Promise((resolve) => {
      if (document.querySelectorAll(selector).length) {
        return resolve(document.querySelectorAll(selector))
      }

      const observer = new MutationObserver(() => {
        if (document.querySelectorAll(selector).length) {
          observer.disconnect()
          resolve(document.querySelectorAll(selector))
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  }

  const injectedSet = new Set()

  setInterval(() => {
    document.querySelectorAll('item-manager-item[title]').forEach((el) => {
      if (injectedSet.has(el)) {
        return
      }
      injectedSet.add(el)

      const a = el as LoadoutTFItemManager
      // eslint-disable-next-line no-console
      console.dir(a)
    })
  }, 1000)
}
