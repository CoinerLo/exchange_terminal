import { useContext } from 'react'
import { RequisitionsTable } from '../../components/RequisitionsTable'
import { OrdersListContext } from '../../context/OrdersList'
import './ListRequisitions.css'

export const ListRequisitions = () => {
  const { ordersList } = useContext(OrdersListContext)

  return (
    <main className="list-requisitions">
      <RequisitionsTable listRequisitions={ordersList} />
    </main>
  )
}
