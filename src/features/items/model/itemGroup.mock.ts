import type { RequestHandler } from 'msw'
import { HttpResponse, http } from 'msw'
import type { ItemServiceGroupedPricingsDTO } from '../api'
import { itemServiceUrl } from '../api'
import type { ItemGroup } from './ItemGroup'

export const mockItemGroups: Array<ItemGroup> = [
  {
    defindex: 30177,
    name: 'Hong Kong Cone',
    image:
      'http://media.steampowered.com/apps/440/icons/fall2013_hong_kong_cone.ba62b565f3f62ae5c4d8b443eb93ab21e1ab48dd.png',
    groups: {
      '0': [],
      '1': [],
      '3': [],
      '5': [
        {
          buy: {
            keys: 49,
            metal: 14.22,
          },
          name: 'Strange Vivid Plasma Hong Kong Cone',
          sku: '30177;5;u16;strange',
          source: 'bptf',
          time: 1692748925,
        },
        {
          buy: {
            keys: 37,
            metal: 25,
          },
          name: 'Massed Flies Hong Kong Cone',
          sku: '30177;5;u12',
          source: 'bptf',
          time: 1700808630,
        },
        {
          buy: {
            keys: 92,
            metal: 3.11,
          },
          name: 'Haunted Ghosts Hong Kong Cone',
          sku: '30177;5;u8',
          source: 'bptf',
          time: 1700697855,
        },
        {
          buy: {
            keys: 142,
            metal: 1.55,
          },
          name: 'Starstorm Insomnia Hong Kong Cone',
          sku: '30177;5;u109',
          source: 'bptf',
          time: 1700697757,
        },
        {
          buy: {
            keys: 113,
            metal: 23.33,
          },
          name: 'Neutron Star Hong Kong Cone',
          sku: '30177;5;u107',
          source: 'bptf',
          time: 1692748938,
        },
        {
          buy: {
            keys: 387,
            metal: 50.88,
          },
          name: 'Poisoned Shadows Hong Kong Cone',
          sku: '30177;5;u76',
          source: 'bptf',
          time: 1692749120,
        },
        {
          buy: {
            keys: 476,
            metal: 38,
          },
          name: 'Death at Dusk Hong Kong Cone',
          sku: '30177;5;u90',
          source: 'bptf',
          time: 1700815206,
        },
        {
          buy: {
            keys: 62,
            metal: 36,
          },
          name: 'Steaming Hong Kong Cone',
          sku: '30177;5;u36',
          source: 'bptf',
          time: 1699197002,
        },
        {
          buy: {
            keys: 124,
            metal: 52.22,
          },
          name: 'Circling Heart Hong Kong Cone',
          sku: '30177;5;u19',
          source: 'bptf',
          time: 1700794891,
        },
        {
          buy: {
            keys: 58,
            metal: 27.77,
          },
          name: 'Smoking Hong Kong Cone',
          sku: '30177;5;u35',
          source: 'bptf',
          time: 1700791220,
        },
        {
          buy: {
            keys: 232,
            metal: 14,
          },
          name: 'Tesla Coil Hong Kong Cone',
          sku: '30177;5;u108',
          source: 'bptf',
          time: 1700805707,
        },
        {
          buy: {
            keys: 87,
            metal: 6.88,
          },
          name: 'Stormy Storm Hong Kong Cone',
          sku: '30177;5;u29',
          source: 'bptf',
          time: 1700724614,
        },
        {
          buy: {
            keys: 190,
            metal: 9.66,
          },
          name: 'Starstorm Slumber Hong Kong Cone',
          sku: '30177;5;u110',
          source: 'bptf',
          time: 1700799096,
        },
        {
          buy: {
            keys: 217,
            metal: 52.22,
          },
          name: 'Purple Energy Hong Kong Cone',
          sku: '30177;5;u10',
          source: 'bptf',
          time: 1700805715,
        },
        {
          buy: {
            keys: 98,
            metal: 62.22,
          },
          name: 'Searing Plasma Hong Kong Cone',
          sku: '30177;5;u15',
          source: 'bptf',
          time: 1700764809,
        },
        {
          buy: {
            keys: 29,
            metal: 10,
          },
          name: 'Stare From Beyond Hong Kong Cone',
          sku: '30177;5;u83',
          source: 'bptf',
          time: 1695513732,
        },
        {
          buy: {
            keys: 565,
            metal: 49.88,
          },
          name: 'The Ooze Hong Kong Cone',
          sku: '30177;5;u84',
          source: 'bptf',
          time: 1695556343,
        },
        {
          buy: {
            keys: 428,
            metal: 53.88,
          },
          name: 'Morning Glory Hong Kong Cone',
          sku: '30177;5;u89',
          source: 'bptf',
          time: 1700784197,
        },
        {
          buy: {
            keys: 38,
            metal: 50.77,
          },
          name: 'Aces High Hong Kong Cone',
          sku: '30177;5;u59',
          source: 'bptf',
          time: 1700794870,
        },
        {
          buy: {
            keys: 86,
            metal: 0,
          },
          name: 'Vivid Plasma Hong Kong Cone',
          sku: '30177;5;u16',
          source: 'bptf',
          time: 1700788855,
        },
        {
          buy: {
            keys: 60,
            metal: 43.44,
          },
          name: 'Circling Peace Sign Hong Kong Cone',
          sku: '30177;5;u18',
          source: 'bptf',
          time: 1700775060,
        },
        {
          buy: {
            keys: 153,
            metal: 49.33,
          },
          name: 'Disco Beat Down Hong Kong Cone',
          sku: '30177;5;u62',
          source: 'bptf',
          time: 1700798422,
        },
        {
          buy: {
            keys: 63,
            metal: 19.55,
          },
          name: 'Circling TF Logo Hong Kong Cone',
          sku: '30177;5;u11',
          source: 'bptf',
          time: 1700736051,
        },
        {
          buy: {
            keys: 100,
            metal: 47.66,
          },
          name: 'Cloud 9 Hong Kong Cone',
          sku: '30177;5;u58',
          source: 'bptf',
          time: 1700786411,
        },
        {
          buy: {
            keys: 358,
            metal: 54.88,
          },
          name: 'Burning Flames Hong Kong Cone',
          sku: '30177;5;u13',
          source: 'bptf',
          time: 1700805710,
        },
        {
          buy: {
            keys: 58,
            metal: 32.66,
          },
          name: 'Orbiting Fire Hong Kong Cone',
          sku: '30177;5;u33',
          source: 'bptf',
          time: 1700805675,
        },
        {
          buy: {
            keys: 209,
            metal: 36.33,
          },
          name: 'Power Surge Hong Kong Cone',
          sku: '30177;5;u68',
          source: 'bptf',
          time: 1658317383,
        },
        {
          buy: {
            keys: 121,
            metal: 27.77,
          },
          name: 'Molten Mallard Hong Kong Cone',
          sku: '30177;5;u88',
          source: 'bptf',
          time: 1692822000,
        },
        {
          buy: {
            keys: 290,
            metal: 0.33,
          },
          name: 'Spellbound Hong Kong Cone',
          sku: '30177;5;u74',
          source: 'bptf',
          time: 1692748970,
        },
        {
          buy: {
            keys: 41,
            metal: 43.66,
          },
          name: 'Green Confetti Hong Kong Cone',
          sku: '30177;5;u6',
          source: 'bptf',
          time: 1700817615,
        },
        {
          buy: {
            keys: 31,
            metal: 40.66,
          },
          name: 'Orbiting Planets Hong Kong Cone',
          sku: '30177;5;u32',
          source: 'bptf',
          time: 1700791249,
        },
        {
          buy: {
            keys: 40,
            metal: 30,
          },
          name: 'Strange Circling Peace Sign Hong Kong Cone',
          sku: '30177;5;u18;strange',
          source: 'bptf',
          time: 1692748962,
        },
        {
          buy: {
            keys: 40,
            metal: 28.44,
          },
          name: 'Strange Starstorm Slumber Hong Kong Cone',
          sku: '30177;5;u110;strange',
          source: 'bptf',
          time: 1692748877,
        },
        {
          buy: {
            keys: 36,
            metal: 46.66,
          },
          name: 'Dead Presidents Hong Kong Cone',
          sku: '30177;5;u60',
          source: 'bptf',
          time: 1700805681,
        },
        {
          buy: {
            keys: 40,
            metal: 16.44,
          },
          name: 'Purple Confetti Hong Kong Cone',
          sku: '30177;5;u7',
          source: 'bptf',
          time: 1700809203,
        },
        {
          buy: {
            keys: 40,
            metal: 24.88,
          },
          name: 'Strange Scorching Flames Hong Kong Cone',
          sku: '30177;5;u14;strange',
          source: 'bptf',
          time: 1658379866,
        },
        {
          buy: {
            keys: 507,
            metal: 5,
          },
          name: 'Roboactive Hong Kong Cone',
          sku: '30177;5;u72',
          source: 'bptf',
          time: 1692885635,
        },
        {
          buy: {
            keys: 40,
            metal: 30,
          },
          name: 'Strange Starstorm Insomnia Hong Kong Cone',
          sku: '30177;5;u109;strange',
          source: 'bptf',
          time: 1693267586,
        },
        {
          buy: {
            keys: 72,
            metal: 59.77,
          },
          name: 'Hellfire Hong Kong Cone',
          sku: '30177;5;u78',
          source: 'bptf',
          time: 1658474404,
        },
        {
          buy: {
            keys: 265,
            metal: 7.55,
          },
          name: 'Ghastly Ghosts Jr Hong Kong Cone',
          sku: '30177;5;u85',
          source: 'bptf',
          time: 1658184737,
        },
        {
          buy: {
            keys: 57,
            metal: 18.55,
          },
          name: 'Terror-Watt Hong Kong Cone',
          sku: '30177;5;u57',
          source: 'bptf',
          time: 1700794823,
        },
        {
          buy: {
            keys: 113,
            metal: 13.44,
          },
          name: 'Miami Nights Hong Kong Cone',
          sku: '30177;5;u61',
          source: 'bptf',
          time: 1700808038,
        },
        {
          buy: {
            keys: 271,
            metal: 61.22,
          },
          name: 'Sunbeams Hong Kong Cone',
          sku: '30177;5;u17',
          source: 'bptf',
          time: 1700782225,
        },
        {
          buy: {
            keys: 59,
            metal: 39.77,
          },
          name: 'Kill-a-Watt Hong Kong Cone',
          sku: '30177;5;u56',
          source: 'bptf',
          time: 1700800206,
        },
        {
          buy: {
            keys: 345,
            metal: 34.88,
          },
          name: 'Scorching Flames Hong Kong Cone',
          sku: '30177;5;u14',
          source: 'bptf',
          time: 1700819438,
        },
        {
          buy: {
            keys: 39,
            metal: 49,
          },
          name: 'Bubbling Hong Kong Cone',
          sku: '30177;5;u34',
          source: 'bptf',
          time: 1700808054,
        },
        {
          buy: {
            keys: 176,
            metal: 48.22,
          },
          name: 'Green Energy Hong Kong Cone',
          sku: '30177;5;u9',
          source: 'bptf',
          time: 1700805682,
        },
        {
          buy: {
            keys: 422,
            metal: 48.33,
          },
          name: 'Frostbite Hong Kong Cone',
          sku: '30177;5;u87',
          source: 'bptf',
          time: 1700815276,
        },
        {
          buy: {
            keys: 101,
            metal: 4.22,
          },
          name: 'Blizzardy Storm Hong Kong Cone',
          sku: '30177;5;u30',
          source: 'bptf',
          time: 1700820017,
        },
        {
          buy: {
            keys: 29,
            metal: 33.77,
          },
          name: "Nuts n' Bolts Hong Kong Cone",
          sku: '30177;5;u31',
          source: 'bptf',
          time: 1700790110,
        },
      ],
      '6': [
        {
          buy: {
            keys: 0,
            metal: 9.22,
          },
          name: 'Hong Kong Cone',
          sku: '30177;6',
          source: 'bptf',
          time: 1700807234,
        },
      ],
      '9': [],
      '11': [
        {
          buy: {
            keys: 3,
            metal: 21.77,
          },
          name: 'Strange Hong Kong Cone',
          sku: '30177;11',
          source: 'bptf',
          time: 1700820125,
        },
      ],
      '13': [],
      '14': [],
      '15': [],
    },
  },
  {
    defindex: 1007,
    name: 'Festive Grenade Launcher',
    image:
      'http://media.steampowered.com/apps/440/icons/c_grenadelauncher_xmas.2d17b0e82901e7fd2de23fb3f9bf8cb37c43d052.png',
    groups: {
      '0': [],
      '1': [],
      '3': [],
      '5': [],
      '6': [
        {
          buy: {
            keys: 12,
            metal: 19.77,
          },
          name: 'Professional Killstreak Festive Grenade Launcher',
          sku: '1007;6;kt-3',
          source: 'bptf',
          time: 1700820089,
        },
        {
          buy: {
            keys: 0,
            metal: 26.44,
          },
          name: 'Festive Grenade Launcher',
          sku: '1007;6',
          source: 'bptf',
          time: 1700799335,
        },
        {
          buy: {
            keys: 1,
            metal: 28.66,
          },
          name: 'Specialized Killstreak Festive Grenade Launcher',
          sku: '1007;6;kt-2',
          source: 'bptf',
          time: 1700697784,
        },
        {
          buy: {
            keys: 1,
            metal: 4.88,
          },
          name: 'Killstreak Festive Grenade Launcher',
          sku: '1007;6;kt-1',
          source: 'bptf',
          time: 1700815269,
        },
      ],
      '9': [],
      '11': [
        {
          buy: {
            keys: 8,
            metal: 57.55,
          },
          name: 'Strange Specialized Killstreak Festive Grenade Launcher',
          sku: '1007;11;kt-2',
          source: 'bptf',
          time: 1700817603,
        },
        {
          buy: {
            keys: 9,
            metal: 7,
          },
          name: 'Strange Festive Grenade Launcher',
          sku: '1007;11',
          source: 'bptf',
          time: 1700595099,
        },
        {
          buy: {
            keys: 10,
            metal: 20.66,
          },
          name: 'Strange Killstreak Festive Grenade Launcher',
          sku: '1007;11;kt-1',
          source: 'bptf',
          time: 1700820128,
        },
        {
          buy: {
            keys: 23,
            metal: 31.66,
          },
          name: 'Strange Professional Killstreak Festive Grenade Launcher',
          sku: '1007;11;kt-3',
          source: 'bptf',
          time: 1700820149,
        },
      ],
      '13': [],
      '14': [],
      '15': [],
    },
  },
]

export const mockItemGroupsRequestInterceptors: Array<RequestHandler> = [
  http.get(`${itemServiceUrl}/pricings/group`, () => {
    return HttpResponse.json<ItemServiceGroupedPricingsDTO>({
      pricings: mockItemGroups,
      success: true,
      timestamp: 1700820361271,
    })
  }),
]
