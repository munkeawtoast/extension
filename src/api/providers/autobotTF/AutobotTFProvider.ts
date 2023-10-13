import { ServiceUnavailableError } from '~/api/common/error'
import type { Price } from '~/api/common/price'
import type { PriceProvider } from '~/api/common/priceProvider'

export default class AutobotTFPriceProvider implements PriceProvider {
  private host = new URL('https://autobot.tf/json/')
  private schemaHost = new URL('https://schema.autobot.tf/')

  /**
   *
   * @param request
   * @returns
   */
  private static async prehandleError(request: Promise<Response>) {
    const response = await request
    if (response.ok) {
      return response.json()
    }
    if (response.status === 503) {
      throw new ServiceUnavailableError(
        'Fetching Error: Service unavailable for the time being, please try again later.'
      )
    } else {
      const data = (await response.json()) as { message: string }
      throw new Error(`Fetching Error: ${data.message}`)
    }
  }

  async getAllPrices(): Promise<Price[]> {
    const rawItems = (await AutobotTFPriceProvider.prehandleError(
      fetch(new URL('/pricelist-array', this.host))
    )) as { items: Price[] }
    return rawItems.items
  }

  async getPriceBySKU(sku: string): Promise<Price> {
    return AutobotTFPriceProvider.prehandleError(
      fetch(new URL(`/items/${sku}`, this.host))
    )
  }

  async getPriceByName(itemName: string): Promise<Price> {
    const { sku } = (await AutobotTFPriceProvider.prehandleError(
      fetch(new URL(`/items/${itemName}`, this.schemaHost))
    )) as { sku: string }
    return this.getPriceBySKU(sku)
  }
}
