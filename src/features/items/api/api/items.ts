import itemApi from '../axios.instance'
import type {
  ItemServiceGroupedPricingsDTO,
  ItemServicePricingsDTO,
} from '../dto'

export const getAllPricings = async () => {
  const { data } =
    await itemApi.get<Prettify<ItemServicePricingsDTO>>('/pricings')

  return data
  //     ^?
}

export const getAllGroupedPricings = async () => {
  const { data } =
    await itemApi.get<Prettify<ItemServiceGroupedPricingsDTO>>(
      '/pricings/group'
    )

  return data
  //     ^?
}
