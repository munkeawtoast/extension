import ActiveItemsManager from './manager/activeItems'
import { ManagerProvider } from './components/ManagerProvider'
import { AppQueryClientProvider } from '~/hooks/tanStack/query'
import { StyleHrefContextProvider } from '~/hooks/style'

const PricetagApp = () => {
  return (
    <AppQueryClientProvider>
      <ManagerProvider>
        <StyleHrefContextProvider>
          <ActiveItemsManager />
        </StyleHrefContextProvider>
      </ManagerProvider>
    </AppQueryClientProvider>
  )
}

export default PricetagApp
