import { useManageActiveItems } from '~/features/items/hooks/manage/useManageActiveItems'

export const ManagerProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  useManageActiveItems()

  return children
}
