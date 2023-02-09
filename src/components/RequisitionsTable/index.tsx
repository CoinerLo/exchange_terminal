import { FC } from 'react'
import type { Order } from '../../models/Order'
import { RequisitionsTableItem } from './RequisitionsTableItem'
import './RequisitionsTable.css'

interface RequisitionsTableProps {
  listRequisitions: [] | Order[]
}

export const RequisitionsTable: FC<RequisitionsTableProps> = ({
  listRequisitions,
}) => {
  return (
    <table className="requisitions-table" border={1}>
      <caption>Список заявок</caption>
      <colgroup>
        <col className="requisitions-table-width-50" />
        <col />
        <col />
        <col className="requisitions-table-width-100" />
        <col className="requisitions-table-width-50" />
        <col className="requisitions-table-width-100" />
        <col className="requisitions-table-width-100" />
        <col className="requisitions-table-width-100" />
        <col className="requisitions-table-width-100" />
      </colgroup>
      <thead>
        <tr>
          <th>Id</th>
          <th>Creation time</th>
          <th>Change time</th>
          <th>Status</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Instrument</th>
          <th>Close order</th>
        </tr>
      </thead>
      <tbody>
        {listRequisitions.map(listItem => (
          <RequisitionsTableItem key={listItem.id} listItem={listItem} />
        ))}
      </tbody>
    </table>
  )
}
