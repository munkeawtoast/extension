import { useQuery } from '@tanstack/react-query'
import { getAllGroupedPricings, getAllPricings } from '../api/api/items'

export const useGetAllPricings = () => {
  return useQuery({
    queryKey: ['pricings'],
    queryFn: getAllPricings,
  })
}

export const useGetAllGroupedPricings = () => {
  return useQuery({
    queryKey: ['pricings-group'],
    queryFn: getAllGroupedPricings,
  })
}
