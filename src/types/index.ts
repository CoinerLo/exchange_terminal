import { Instrument, OrderSide } from '../utils/Enums'

export interface InstrumentType {
  id: number
  name: Instrument
  bid: string
  ask: string
}

export interface NewOrderDataType {
  instrument: Instrument
  side: OrderSide
  price: string
  amount: number
}
