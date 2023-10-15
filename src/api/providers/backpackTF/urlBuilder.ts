import type SKU from '@tf2autobot/tf2-sku'

export const nextBackpackUrlBuilder = (sku: SKU) => {
  const wears: { [n: string]: string } = {
    1: 'Factory New',
    2: 'Minimal Wear',
    3: 'Field-Tested',
    4: 'Well-Worn',
    5: 'Battle Scarred',
  }
  const url = new URL('https://next.backpack.tf/stats')

  const searchParams = {
    item: `${sku.defindex}`,
    quality: `${sku.quality}`,
    killstreakTier: `${sku.killstreak}`,
    australium: sku.australium ? `${sku.australium}` : undefined!,
    wearTier: (sku.wear ? `${wears[sku.wear]}` : undefined)!,
    craftable: `${sku.craftable}`,
    // effect: '',
    // festive: '',
    // paintkit: '',
    // wear: '',
    // quality2: '',
    // craftnumber: '',
    // crateseries: '',
    // target: '',
    // output: '',
    // outputQuality: '',
    // paint: '',
  }

  const search = new URLSearchParams(
    Object.entries(searchParams).filter(([, val]) => !(val == null))
  )

  url.search = search.toString()
  return url
}
