import { createContext } from 'react'
import type { Order } from '../models/Order'

interface OrdersListType {
  ordersList: [] | Order[]
  setOrdersList: React.Dispatch<React.SetStateAction<[] | Order[]>>
}

export const OrdersListContext = createContext<OrdersListType>({
  ordersList: [],
  setOrdersList: () => undefined,
})
