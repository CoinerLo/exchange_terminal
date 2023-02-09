import { FC, useState } from 'react'
import type { Order } from '../../../models/Order'
import { OrderSide, OrederStatus } from '../../../utils/Enums'

interface RequisitionsTableItem {
  listItem: Order
}

export const RequisitionsTableItem: FC<RequisitionsTableItem> = ({
  listItem,
}) => {
  const { id, status, side, price, amount, instrument } = listItem
  const [orderStatus, setOrderStatus] = useState(status)

  const creationTime = listItem.getCreationTime()
  const changeTime = listItem.getChangeTime()

  const closeOrderHandler = () => {
    if (orderStatus === OrederStatus.active) {
      listItem.closeOrder()
      setOrderStatus(OrederStatus.cancelled)
    }
  }

  const colorText = side === OrderSide.buy ? 'txt-green' : 'txt-red'

  return (
    <tr>
      <td>{id}</td>
      <td>{creationTime}</td>
      <td>{changeTime}</td>
      <td>{orderStatus}</td>
      <td className={colorText}>{side}</td>
      <td className={colorText}>{price}</td>
      <td className={colorText}>{amount}</td>
      <td>{instrument}</td>
      <td className="requisitions-table-close-btn" onClick={closeOrderHandler}>
        Close
      </td>
    </tr>
  )
}
