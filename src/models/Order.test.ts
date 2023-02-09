import { NewOrderDataType } from '../types'
import { Instrument, OrderSide, OrederStatus } from '../utils/Enums'
import { Order } from './Order'

let newOrder: Order

const orderMockData: NewOrderDataType = {
  amount: 10000,
  price: '71.0150',
  side: OrderSide.buy,
  instrument: Instrument.eur_rub,
}

beforeEach(() => (newOrder = new Order(orderMockData)))

describe('New order', () => {
  test('create', () => {
    const orderInstrument = newOrder.instrument
    expect(orderInstrument).toBe(Instrument.eur_rub)
  })

  test('close', () => {
    newOrder.closeOrder()
    expect(newOrder.status).toBe(OrederStatus.cancelled)
  })

  test('get creation time', () => {
    const date = newOrder.getCreationTime()
    expect(date).not.toHaveLength(0)
  })

  test('get change time', () => {
    const date = newOrder.getChangeTime()
    expect(date).not.toHaveLength(0)
  })
})
