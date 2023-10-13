export interface PaginatedMetadataModel {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface PaginatedModel {
  items: any[][]
  meta: PaginatedMetadataModel
}

export interface PriceModel {
  sku: string
  buyHalfScrap: number
  buyKeys: number
  buyKeyHalfScrap?: number
  sellHalfScrap: number
  sellKeys: number
  sellKeyHalfScrap?: number
  createdAt: string
  updatedAt: string
}

export type OrderEnum = 'ASC' | 'DESC'

export type OrderByEnum = 'createdAt' | 'updatedAt'

export interface CheckPriceModel {
  enqueued: boolean
  state: string
}

export interface HistoryModel {
  sku: string
  buyHalfScrap: number
  buyKeys: number
  sellHalfScrap: number
  sellKeys: number
  createdAt: string
}

export interface AccessTokenModel {
  accessToken: string
}
