import itemInjector from './injectors/item'
;(() => {
  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const styleEl = document.createElement('link')
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute(
    'href',
    browser.runtime.getURL('dist/contentScripts/style.css')
  )
  document.body.appendChild(styleEl)
  // shadowDOM.appendChild(root)
  // document.body.appendChild(container)

  itemInjector()
})()
