import {
  ClientMessageType,
  Instrument,
  OrderSide,
  OrederStatus,
  ServerMessageType,
} from '../utils/Enums'

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

export interface UnsubscribeData {
  subscriptionId: string
}

export interface SubscribeData {
  instrument: Instrument
}

export interface IClientMessage {
  messageType: ClientMessageType
  message: NewOrderDataType | UnsubscribeData | SubscribeData
}

export interface Report {
  orderId: string
  orderStatus: OrederStatus
}

export interface MarketDataUpdate {
  subscriptionId: string
  instrument: InstrumentType
}

export interface ErrorServerMessage {
  reason: string
}

export interface IServerMessage {
  messageType: ServerMessageType
  message: ErrorServerMessage | Report | MarketDataUpdate
}
