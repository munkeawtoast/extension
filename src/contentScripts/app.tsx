import ActiveItemsManager from './manager/activeItems'
import './style.css'
import { StyleHrefContextProvider } from '~/hooks/style'

const PricetagApp = () => {
  return (
      <StyleHrefContextProvider>
        <ActiveItemsManager />
      </StyleHrefContextProvider>
  )
}

export default PricetagApp
