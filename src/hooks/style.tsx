import { createContext, useContext, useEffect, useState } from 'react'
import { waitForEl } from '~/contentScripts/util'

export const StyleHrefContext = createContext<string | null>(null)

export const StyleHrefContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [styleHref, setStyleHref] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      const styleEl = (await waitForEl(
        '#pricetag-extension-stylesheet'
      )) as HTMLLinkElement
      setStyleHref(styleEl.href)
    })()
  })

  return (
    <StyleHrefContext.Provider value={styleHref}>
      {children}
    </StyleHrefContext.Provider>
  )
}

export const StyleApplier: React.FC = () => {
  const href = useContext(StyleHrefContext)
  return href ? <link rel="stylesheet" href={href} /> : null
}
