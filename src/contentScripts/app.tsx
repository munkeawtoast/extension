import ActiveItemsManager from './manager/activeItems'
import { AppQueryClientProvider } from '~/hooks/tanStack/query'
import './style.css'
import { StyleHrefContextProvider } from '~/hooks/style'

const PricetagApp = () => {
  return (
    <AppQueryClientProvider>
      <StyleHrefContextProvider>
        <ActiveItemsManager />
      </StyleHrefContextProvider>
    </AppQueryClientProvider>
  )
}

export default PricetagApp
