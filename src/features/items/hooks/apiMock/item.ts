import type { RestHandler } from 'msw'
import { rest } from 'msw'
import { devItemServiceUrl, prodItemServiceUrl } from '../../api'
import { mockItems } from './item.mock'

export const mockItemsRequestInterceptors: Array<RestHandler> = [
  ...[devItemServiceUrl, prodItemServiceUrl].map((url) =>
    rest.get(`${url}/pricings`, (req, res, ctx) => {
      //
      // return res.json<ItemServiceGroupedPricingsDTO>({
      //   pricings: mockItemGroups,
      //   success: true,
      //   timestamp: 1700820361271,
      // })
      return res(
        ctx.json({
          pricings: mockItems,
          success: true,
          timestamp: 1700820361271,
        })
      )
    })
  ),
]
