import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type GroupedPrice, useGroupedPricing } from '../useGroupedPricings'
import AutobotTFPriceProvider from '~/api/providers/autobotTF/AutobotTFProvider'

interface PricingState {
  state: 'ready' | 'fetching' | 'error' | 'unset'
  prices: GroupedPrice[]
  lastFetchedDate: number
}

interface Actions {
  fetchPrices(): void
  reset(): void
}

const initialStates: PricingState = {
  prices: [],
  state: 'unset',
  lastFetchedDate: 0,
}

const usePricings = create<PricingState & Actions>()(
  devtools(
    persist(
      (set, get) => {
        async function fetchPrices() {
          if (get().state === 'fetching') {
            return
          }
          try {
            const priceProvider = new AutobotTFPriceProvider()
            set({
              state: 'fetching',
              lastFetchedDate: Date.now(),
            })
            const prices = await priceProvider.getAllPrices()
            const groupedPricings = useGroupedPricing(prices)
            set({
              state: 'ready',
              prices: groupedPricings,
            })
          } catch {
            set({
              state: 'error',
              lastFetchedDate: Date.now(),
            })
          }
        }
        if (Date.now() - get()?.lastFetchedDate > 3600) {
          fetchPrices()
        }
        return {
          ...initialStates,
          fetchPrices: () => fetchPrices(),
          reset: () => {
            set(initialStates)
            get().fetchPrices()
          },
        }
      },
      {
        name: 'pricings',
      }
    )
  )
)

export default usePricings
