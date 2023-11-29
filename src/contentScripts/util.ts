export async function waitForEl(selector: string): Promise<Element> {
  if (document.querySelector(selector)) {
    return document.querySelector(selector)!
  }
  return new Promise((resolve) => {
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
