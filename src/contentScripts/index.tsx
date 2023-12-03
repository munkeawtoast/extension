import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import { runtime } from 'webextension-polyfill'
import PricetagApp from './app'
import './style.css'

const AppWrapper = () => (
  <>
    <link
      rel="stylesheet"
      id="pricetag-extension-stylesheet"
      href={runtime.getURL('dist/contentScripts/style.css')}
    />
    <PricetagApp />
  </>
)

;(() => {
  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const shadowDOM =
    container.attachShadow({
      mode: __DEV__ ? 'open' : 'closed',
    }) || container
  shadowDOM.appendChild(root)
  document.body.appendChild(container)

  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.href = runtime.getURL('dist/contentScripts/style.css')
  container.appendChild(stylesheet)

  const app = createRoot(container)
  app.render(createElement(AppWrapper))
})()
