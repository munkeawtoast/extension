import { NotImplementedError } from '../../common/error'
import type { PriceProvider } from '../../common/PriceProvider'
export class PriceTFPriceProvider implements PriceProvider {
  constructor() {
    throw new NotImplementedError(
      'PriceTFPriceProvider is not yet implemented',
      {}
    )
  }
  // private host = new URL('https://api2.prices.tf')
  // private apiKey?: string
  // private timeSinceLastFetch?: number

  // constructor() {
  //   this.resetApiKey()
  // }

  // private async resetApiKey() {
  //   this.timeSinceLastFetch = Date.now()
  //   const response = await fetch(new URL('/auth/access', this.host), {
  //     method: 'POST',
  //   })
  //   if (!response.ok) {
  //     throw new Error('Server is down.')
  //   }
  //   this.apiKey = ((await response.json()) as AccessTokenModel).accessToken
  // }

  // async getAllPrices(): Promise<Price[]> {
  //   const response = await fetch(new URL('/prices', this.host), {
  //     method: 'POST',
  //   })
  //   if (!response.ok) {
  //     if (response.status === 401) {
  //       this.resetApiKey()
  //       return this.getAllPrices()
  //     }
  //     throw new Error('Server is down.')
  //   }

  //   return (await response.json()) as AccessTokenModel
  // }
}
