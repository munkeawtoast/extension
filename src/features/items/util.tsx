import classNames from 'classnames'
import TF2SKU from '@tf2autobot/tf2-sku'
import type { ItemGroup } from './model/ItemGroup'
import type { Item, Qualities } from '~/features/items/model/item'
import {} from 'msw/lib/glossary-de6278a9'

export function getPaintKitName(id: number) {
  const paintKitNameMap: Record<number, string> = {
    0: 'Red Rock Roscoe',
    1: 'Sand Cannon',
    2: 'Wrapped Reviver',
    3: 'Psychedelic Slugger',
    4: 'Carpet Bomber',
    5: 'Masked Mender',
    6: 'Woodland Warrior',
    7: 'Purple Range',
    8: 'Sudden Flurry',
    9: 'Forest Fire',
    10: 'King of the Jungle',
    11: 'Night Terror',
    12: 'Backwoods Boomstick',
    13: 'Woodsy Widowmaker',
    14: 'Night Owl',
    15: 'Tartan Torpedo',
    16: 'Rustic Ruiner',
    17: 'Barn Burner',
    18: 'Homemade Heater',
    19: 'Lumber From Down Under',
    20: 'Iron Wood',
    21: 'Country Crusher',
    22: 'Plaid Potshotter',
    23: 'Shot in the Dark',
    24: 'Blasted Bombardier',
    25: 'Reclaimed Reanimator',
    26: 'Antique Annihilator',
    27: 'Old Country',
    28: 'American Pastoral',
    29: 'Backcountry Blaster',
    30: 'Bovine Blazemaker',
    31: 'War Room',
    32: 'Treadplate Tormenter',
    33: 'Bogtrotter',
    34: 'Earth, Sky and Fire',
    35: 'Hickory Hole-Puncher',
    36: 'Spruce Deuce',
    37: 'Team Sprayer',
    38: 'Rooftop Wrangler',
    39: 'Civil Servant',
    40: 'Citizen Pain',
    41: 'Local Hero',
    42: 'Mayor',
    43: 'Smalltown Bringdown',
    44: 'Civic Duty',
    45: 'Liquid Asset',
    46: 'Black Dahlia',
    47: 'Lightning Rod',
    48: 'Pink Elephant',
    49: 'Flash Fryer',
    50: 'Spark of Life',
    51: 'Dead Reckoner',
    52: 'Shell Shocker',
    53: 'Current Event',
    54: 'Turbine Torcher',
    55: 'Brick House',
    56: 'Sandstone Special',
    57: 'Aqua Marine',
    58: 'Low Profile',
    59: 'Thunderbolt',
    60: 'Autumn',
    61: 'Nutcracker',
    62: 'Pumpkin Patch',
    63: 'Macabre Web',
    64: 'Boneyard',
    65: 'Wildwood',
    66: 'Balloonicorn',
    67: 'Rainbow',
    68: 'Sweet Dreams',
    69: 'Blue Mew',
    70: 'Brain Candy',
    71: 'Stabbed to Hell',
    72: 'Flower Power',
    73: 'Mister Cuddles',
    74: 'Shot to Hell',
    75: 'Torqued to Hell',
    76: 'Coffin Nail',
    77: 'Top Shelf',
    78: 'Dressed to Kill',
    79: "High Roller's",
    80: 'Warhawk',
    81: 'Blitzkrieg',
    82: 'Airwolf',
    83: 'Corsair',
    84: 'Butcher Bird',
    85: 'Killer Bee',
    86: 'Red Bear',
    102: 'Wrapped Reviver Mk.II',
    104: 'Carpet Bomber Mk.II',
    105: 'Masked Mender Mk.II',
    106: 'Woodland Warrior Mk.II',
    109: 'Forest Fire Mk.II',
    112: 'Backwoods Boomstick Mk.II',
    113: 'Woodsy Widowmaker Mk.II',
    114: 'Night Owl Mk.II',
    120: 'Iron Wood Mk.II',
    122: 'Plaid Potshotter Mk.II',
    130: 'Bovine Blazemaker Mk.II',
    139: 'Civil Servant Mk.II',
    143: 'Smalltown Bringdown Mk.II',
    144: 'Civic Duty Mk.II',
    151: 'Dead Reckoner Mk.II',
    160: 'Autumn Mk.II',
    161: 'Nutcracker Mk.II',
    163: 'Macabre Web Mk.II',
    200: 'Bloom Buffed',
    201: 'Quack Canvassed',
    202: 'Bank Rolled',
    203: 'Merc Stained',
    204: 'Kill Covered',
    205: 'Fire Glazed',
    206: 'Pizza Polished',
    207: 'Bonk Varnished',
    208: 'Star Crossed',
    209: "Clover Camo'd",
    210: 'Freedom Wrapped',
    211: 'Cardboard Boxed',
    212: 'Dream Piped',
    213: 'Miami Element',
    214: 'Neo Tokyo',
    215: 'Geometrical Teams',
    217: 'Bomber Soul',
    218: 'Uranium',
    220: 'Cabin Fevered',
    221: 'Polar Surprise',
    223: 'Hana',
    224: 'Dovetailed',
    225: 'Cosmic Calamity',
    226: 'Hazard Warning',
    228: 'Mosaic',
    230: 'Jazzy',
    232: 'Alien Tech',
    234: 'Damascus and Mahogany',
    235: 'Skull Study',
    236: 'Haunted Ghosts',
    237: 'Spectral Shimmered',
    238: 'Spirit of Halloween',
    239: 'Horror Holiday',
    240: 'Totally Boned',
    241: 'Electroshocked',
    242: 'Ghost Town',
    243: 'Tumor Toasted',
    244: 'Calavera Canvas',
    245: 'Snow Covered',
    246: 'Frost Ornamented',
    247: 'Smissmas Village',
    248: 'Igloo',
    249: 'Seriously Snowed',
    250: 'Smissmas Camo',
    251: "Sleighin' Style",
    252: 'Alpine',
    253: 'Gift Wrapped',
    254: 'Winterland Wrapped',
    255: 'Helldriver',
    256: 'Organ-ically Hellraised',
    257: 'Spectrum Splattered',
    258: 'Candy Coated',
    259: 'Pumpkin Pied',
    260: 'Sweet Toothed',
    261: 'Crawlspace Critters',
    262: 'Portal Plastered',
    263: 'Death Deluxe',
    264: 'Raving Dead',
    265: 'Eyestalker',
    266: "Spider's Cluster",
    267: 'Gourdy Green',
    268: 'Mummified Mimic',
    269: 'Spider Season',
    270: 'Gingerbread Winner',
    271: 'Saccharine Striped',
    272: 'Elfin Enamel',
    273: 'Peppermint Swirl',
    275: 'Snow Globalization',
    276: "Gifting Mann's Wrapping Paper",
    277: 'Snowflake Swirled',
    278: 'Smissmas Spycrabs',
    279: 'Frozen Aurora',
    280: 'Starlight Serenity',
    281: 'Frosty Delivery',
    282: 'Glacial Glazed',
    283: 'Cookie Fortress',
    284: 'Sarsaparilla Sprayed',
    285: 'Swashbuckled',
    286: 'Skull Cracked',
    287: 'Misfortunate',
    289: 'Neon-ween',
    290: 'Simple Spirits',
    291: 'Broken Bones',
    292: 'Potent Poison',
    293: 'Searing Souls',
    294: 'Party Phantoms',
    295: 'Polter-Guised',
    296: 'Kiln and Conquer',
    297: 'Necromanced',
    300: 'Yeti Coated',
    301: 'Park Pigmented',
    302: 'Mannana Peeled',
    303: 'Macaw Masked',
    304: 'Sax Waxed',
    305: 'Anodized Aloha',
    306: 'Bamboo Brushed',
    307: 'Tiger Buffed',
    308: 'Croc Dusted',
    309: 'Piña Polished',
    310: 'Leopard Printed',
    390: 'Dragon Slayer',
    391: 'Smissmas Sweater',
    400: 'Ghoul Blaster',
    401: 'Cream Corned',
    402: 'Sunriser',
    403: 'Sacred Slayer',
    404: 'Metalized Soul',
    405: 'Bonzo Gnawed',
    406: 'Health and Hell',
    407: 'Health and Hell (Green)',
    408: 'Hypergon',
    409: 'Pumpkin Plastered',
    410: 'Chilly Autumn',
    411: 'Steel Brushed',
    412: 'Secretly Serviced',
    413: 'Sky Stallion',
    414: 'Bomb Carrier',
    415: 'Business Class',
    416: 'Deadly Dragon',
    417: 'Team Serviced',
    418: 'Warborn',
    419: 'Pacific Peacemaker',
    420: 'Mechanized Monster',
  }
  return paintKitNameMap[id]
}

export function getNameOfQuality(quality: Qualities) {
  const qualityNameMap: Record<Qualities, string> = {
    '0': 'Normal',
    '1': 'Genuine',
    '3': 'Vintage',
    '5': 'Unusual',
    '6': 'Unique',
    '9': 'Self-made',
    '11': 'Strange',
    '13': 'Haunted',
    '14': "Collector's",
    '15': 'Decorated',
  }

  return qualityNameMap[quality]
}

export function getClassnameColorByQuality(
  quality: Qualities,
  _decorationQuality: any,
  options: {
    border?: boolean
    background?: boolean
    text?: boolean
  }
) {
  const textColorStyleMap: Record<Qualities, string> = {
    '0': 'text-quality-normal',
    '1': 'text-quality-genuine',
    '3': 'text-quality-vintage',
    '5': 'text-quality-unusual',
    '6': 'text-quality-unique',
    '9': 'text-quality-selfmade',
    '11': 'text-quality-strange',
    '13': 'text-quality-haunted',
    '14': 'text-quality-collectors',
    '15': 'text-quality-decorated',
  }
  const bgColorStyleMap: Record<Qualities, string> = {
    '0': 'bg-quality-normal/75',
    '1': 'bg-quality-genuine/75',
    '3': 'bg-quality-vintage/75',
    '5': 'bg-quality-unusual/75',
    '6': 'bg-quality-unique/75',
    '9': 'bg-quality-selfmade/75',
    '11': 'bg-quality-strange/75',
    '13': 'bg-quality-haunted/75',
    '14': 'bg-quality-collectors/75',
    '15': 'bg-quality-decorated/75',
  }
  const borderColorStyleMap: Record<Qualities, string> = {
    '0': 'border-quality-normal',
    '1': 'border-quality-genuine',
    '3': 'border-quality-vintage',
    '5': 'border-quality-unusual',
    '6': 'border-quality-unique',
    '9': 'border-quality-selfmade',
    '11': 'border-quality-strange',
    '13': 'border-quality-haunted',
    '14': 'border-quality-collectors',
    '15': 'border-quality-decorated',
  }
  const { border, background, text } = options
  return classNames(
    text && (textColorStyleMap[quality] ?? 'text-quality-normal'),
    background && (bgColorStyleMap[quality] ?? 'bg-quality-normal'),
    border && (borderColorStyleMap[quality] ?? 'border-quality-normal')
  )
}

export function filterGroupsQuality(
  itemGroups: Array<ItemGroup>,
  qualities: Array<keyof ItemGroup['groups']>
): Array<ItemGroup> {
  return itemGroups.map((itemGroup) => {
    const { groups, ...rest } = itemGroup
    return {
      ...rest,
      groups: Object.fromEntries(
        Object.entries(groups).map(([quality, items]) =>
          qualities.includes(quality as unknown as keyof ItemGroup['groups'])
            ? [quality, items]
            : [
                quality,
                [] as Array<ItemGroup['groups'][keyof ItemGroup['groups']]>,
              ]
        )
      ),
    }
  })
}

export function generateOldBptfUrl(item: Item) {
  const oldBptfDomain = 'https://backpack.tf'
  const base = `${oldBptfDomain}/stats/`

  const sku = TF2SKU.fromString(item.sku)

  const { name } = item
  const nameLowered = name.toLowerCase()

  const isUnusualifier =
    nameLowered.includes('unusualifier') && sku.target !== null

  const isStrangifierChemistrySet =
    nameLowered.includes('chemistry set') &&
    sku.target !== null &&
    sku.output !== null &&
    sku.outputQuality !== null

  const isCollectorsChemistrySet =
    nameLowered.includes('chemistry set') &&
    sku.target === null &&
    sku.output !== null &&
    sku.outputQuality !== null

  const isStrangifier =
    nameLowered.includes('strangifier') && sku.target !== null

  const isFabricator =
    nameLowered.includes('fabricator') &&
    sku.target !== null &&
    sku.output !== null &&
    sku.outputQuality !== null
  const isGenericFabricator =
    nameLowered.includes('fabricator') &&
    sku.target === null &&
    sku.output !== null &&
    sku.outputQuality !== null

  const isKillstreakKit =
    nameLowered.includes('kit') && sku.killstreak !== 0 && sku.target !== null

  const itemName =
    isStrangifierChemistrySet || isCollectorsChemistrySet
      ? 'Chemistry Set'
      : isStrangifier
      ? 'Strangifier'
      : isUnusualifier
      ? 'Unusualifier'
      : isFabricator
      ? sku.killstreak === 2
        ? 'Specialized Killstreak Fabricator'
        : 'Professional Killstreak Fabricator'
      : isKillstreakKit
      ? sku.killstreak === 1
        ? 'Killstreak Kit'
        : sku.killstreak === 2
        ? 'Specialized Killstreak Kit'
        : 'Professional Killstreak Kit'
      : name.includes('Haunted Metal Scrap') ||
        name.includes("Horseless Headless Horsemann's Headtaker")
      ? name.replace('Unique ', '')
      : name

  const quality =
    (sku.quality2 !== null
      ? `${getNameOfQuality(`${sku.quality2 as unknown as Qualities}`)} `
      : '') + getNameOfQuality(`${sku.quality as unknown as Qualities}`)

  const tradable = `${!sku.tradable ? 'Non-' : ''}Tradable`
  const craftable = `${!sku.craftable ? 'Non-' : ''}Craftable`

  const priceindex =
    sku.effect !== null
      ? sku.effect
      : sku.crateseries !== null
      ? sku.crateseries
      : isUnusualifier || isStrangifier
      ? sku.target
      : isFabricator || isStrangifierChemistrySet
      ? `${sku.output}-${sku.outputQuality}-${sku.target}`
      : isKillstreakKit
      ? `${sku.killstreak}-${sku.target}`
      : isCollectorsChemistrySet
      ? `${sku.output}-${sku.outputQuality}`
      : isGenericFabricator
      ? `${sku.output}-${sku.outputQuality}-0`
      : undefined

  const query = `${quality}/${encodeURIComponent(
    itemName
  )}/${tradable}/${craftable}${priceindex ? `/${String(priceindex)}` : ''}`

  return { fullUrl: base + query, query }
}

export default function generateBptfUrl(item: Item): string {
  const bptfDomain = 'https://next.backpack.tf'
  const base = `${bptfDomain}/stats`

  const sku = TF2SKU.fromString(item.sku)
  const { name } = item
  const nameLowered = name.toLowerCase()

  const wears: { [n: string]: string } = {
    1: 'Factory New',
    2: 'Minimal Wear',
    3: 'Field-Tested',
    4: 'Well-Worn',
    5: 'Battle Scarred',
  }

  let query = `?item=${encodeURIComponent(name)}&quality=${encodeURIComponent(
    getNameOfQuality(`${sku.quality as unknown as Qualities}`)
  )}&craftable=${String(sku.craftable)}`

  if (sku.killstreak) {
    query = `${query}&killstreakTier=${String(sku.killstreak)}`
  }

  if (sku.australium) {
    query = `${query}&australium=${String(sku.australium)}`
  }

  if (typeof sku.paintkit === 'number') {
    query = `${query}&texture=${encodeURIComponent(
      getPaintKitName(sku.paintkit)
    )}`
  }

  if (sku.wear) {
    query = `${query}&wearTier=${encodeURIComponent(wears[sku.wear])}`
  }

  if (sku.quality2) {
    query = `${query}&elevatedQuality=${encodeURIComponent(
      getNameOfQuality(`${sku.quality2 as unknown as Qualities}`)
    )}`
  }

  if (
    sku.effect !== null ||
    sku.crateseries !== null ||
    sku.target !== null ||
    sku.output !== null ||
    sku.outputQuality !== null
  ) {
    const nameLowered = name.toLowerCase()

    const isUnusualifier =
      nameLowered.includes('unusualifier') && sku.target !== null

    const isStrangifierChemistrySet =
      nameLowered.includes('chemistry set') &&
      sku.target !== null &&
      sku.output !== null &&
      sku.outputQuality !== null

    const isCollectorsChemistrySet =
      nameLowered.includes('chemistry set') &&
      sku.target === null &&
      sku.output !== null &&
      sku.outputQuality !== null

    const isStrangifier =
      nameLowered.includes('strangifier') && sku.target !== null

    const isFabricator =
      nameLowered.includes('fabricator') &&
      sku.target !== null &&
      sku.output !== null &&
      sku.outputQuality !== null
    const isGenericFabricator =
      nameLowered.includes('fabricator') &&
      sku.target === null &&
      sku.output !== null &&
      sku.outputQuality !== null

    const isKillstreakKit =
      nameLowered.includes('kit') && sku.killstreak !== 0 && sku.target !== null

    const priceindex =
      sku.effect !== null
        ? sku.effect
        : sku.crateseries !== null
        ? sku.crateseries
        : isUnusualifier || isStrangifier
        ? sku.target
        : isFabricator || isStrangifierChemistrySet
        ? `${sku.output}-${sku.outputQuality}-${sku.target}`
        : isKillstreakKit
        ? `${sku.killstreak}-${sku.target}`
        : isCollectorsChemistrySet
        ? `${sku.output}-${sku.outputQuality}`
        : isGenericFabricator
        ? `${sku.output}-${sku.outputQuality}-0`
        : undefined

    if (priceindex) {
      query = `${query}&priceindex=${encodeURIComponent(priceindex)}`
    }
  }

  return base + query
}
