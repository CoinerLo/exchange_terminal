import { IClientMessage, IServerMessage, NewOrderDataType } from '../types'
import {
  ClientMessageType,
  Instrument,
  ServerMessageType,
} from '../utils/Enums'

export class WSTransport {
  private instance: WebSocket | null = null

  constructor() {
    this.instance = null
  }

  public connect() {
    this.instance = new WebSocket('ws://127.0.0.1:5173/ws/')
    this.instance.onclose = () => {
      this.instance = null
    }

    this.instance.onerror = (e: Event) => {
      console.log(e)
    }

    this.instance.onopen = () => {
      console.log('Соединение установлено')
    }

    this.instance.onmessage = event => {
      const message: IServerMessage = JSON.parse(event.data)
      switch (message.messageType) {
        case ServerMessageType.success:
          console.log('Выполнено')
          break
        case ServerMessageType.error:
          console.log('Ошибка, попробуйте снова')
          break
        case ServerMessageType.executionReport:
          console.log('Статус ордера изменился')
          break
        case ServerMessageType.marketDataUpdate:
          console.log('Обновляем данные инструмента')
          break
      }
    }
  }

  public disconnect() {
    this.instance?.close()
  }

  private send(message: IClientMessage) {
    this.instance?.send(JSON.stringify(message))
  }

  public subscribeMarketData = (instrument: Instrument) => {
    this.send({
      messageType: ClientMessageType.subscribeMarketData,
      message: {
        instrument,
      },
    })
  }

  public unsubscribeMarketData = (subscriptionId: string) => {
    this.send({
      messageType: ClientMessageType.unsubscribeMarketData,
      message: {
        subscriptionId,
      },
    })
  }

  public placeOrder = (orderData: NewOrderDataType) => {
    const { amount, instrument, price, side } = orderData
    this.send({
      messageType: ClientMessageType.placeOrder,
      message: {
        instrument,
        side,
        amount,
        price,
      },
    })
  }
}
