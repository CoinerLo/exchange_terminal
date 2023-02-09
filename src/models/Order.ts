import { NewOrderDataType } from '../types'
import { uid } from '../utils'
import { Instrument, OrderSide, OrederStatus } from '../utils/Enums'

export class Order {
  public id: number
  private creationTime: Date
  private changeTime: Date
  public status: OrederStatus
  public side: OrderSide
  public price: string
  public amount: number
  public instrument: Instrument

  constructor({ side, price, amount, instrument }: NewOrderDataType) {
    this.side = side
    this.price = price
    this.amount = amount
    this.instrument = instrument
    this.status = OrederStatus.active
    this.id = uid()
    this.creationTime = new Date()
    this.changeTime = this.creationTime
  }

  public closeOrder() {
    this.status = OrederStatus.cancelled
    this.changeTime = new Date()
  }

  public getCreationTime() {
    return this.creationTime.toISOString()
  }

  public getChangeTime() {
    return this.changeTime.toISOString()
  }
}
