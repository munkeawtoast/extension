import Browser from 'webextension-polyfill'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import PricetagApp from './app'
;(() => {
  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const styleEl = document.createElement('link')
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute(
    'href',
    Browser.runtime.getURL('dist/contentScripts/style.css')
  )
  document.body.appendChild(styleEl)
  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  document.body.appendChild(container)

  const app = createRoot(document.body)
  app.render(createElement(PricetagApp))
})()
