import type { RestHandler } from 'msw'
import { rest } from 'msw'
import { devItemServiceUrl, prodItemServiceUrl } from '../../api'
import type { ItemGroup } from '../../model/ItemGroup'
import mockItemGroupsJson from './itemGroup.mock.json'

const mockItemGroups = mockItemGroupsJson as Array<ItemGroup>

export const mockItemGroupsRequestInterceptors: Array<RestHandler> = [
  ...[devItemServiceUrl, prodItemServiceUrl].map((url) =>
    rest.get(`${url}/pricings/group`, (req, res, ctx) => {
      // return res.json<ItemServiceGroupedPricingsDTO>({
      //   pricings: mockItemGroups,
      //   success: true,
      //   timestamp: 1700820361271,
      // })
      return res(
        ctx.json({
          pricings: mockItemGroups,
          success: true,
          timestamp: 1700820361271,
        })
      )
    })
  ),
]
