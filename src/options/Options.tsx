import PriceTag from '~/features/PriceTag'
import usePricings from '~/features/PriceTag/hooks/stores/usePricings'
import useGroupedPricing from '~/features/PriceTag/hooks/useGroupedPricings'

const Options = () => {
  const { fetchPrices, prices, reset, state, lastFetchedDate } = usePricings()
  const groupedPrices = useGroupedPricing(prices)
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <img
        src="/icon.svg"
        className="icon-btn mx-2 text-2xl"
        alt="extension icon"
      />
      <div>Options</div>
      <input className="border border-gray-400 rounded px-2 py-1 mt-2" />
      <div className="mt-4">
        Powered by Vite <pixelarticons-zap class="align-middle inline-block" />
      </div>
      test
      <div className="h-120 w-120 bg-red relative">
        {<PriceTag itemPrices={prices.slice(0, 100)} />}
      </div>
    </main>
  )
}

export default Options
