import type { Price } from './price'
import type { TF2Item } from './sku'

export interface PriceProvider {
  getAllPrices(): Promise<Price[]>
  getBySKU(sku: TF2Item): Promise<Price>
  getByDataItem(): Promise<Price>
}
