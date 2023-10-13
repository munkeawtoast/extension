import { useAsyncState } from '@vueuse/core'
import type { Price } from '~/api/common/price'
import AutobotTFPriceProvider from '~/api/providers/autobotTF/AutobotTFProvider'
import { useStorageLocal } from '~/composables/useStorageLocal'

export const usePricings = () => {
  const provider = new AutobotTFPriceProvider()
  const pricesRef = useStorageLocal('pricings', []) as Ref<Price[]>
  const latestRef = useStorageLocal('last-request-time', Date.now())
  const { state: fetchedPrice, error } = useAsyncState(
    provider.getAllPrices(),
    []
  )

  watch(fetchedPrice, (newPrices) => {
    pricesRef.value = newPrices
    latestRef.value = Date.now()
  })

  return { prices: pricesRef, error }
}
