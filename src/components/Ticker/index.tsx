import { FC, useCallback, useContext, useState } from 'react'
import { InstrumentType } from '../../types'
import { OrdersListContext } from '../../context/OrdersList'
import { OrderSide } from '../../utils/Enums'
import { Order } from '../../models/Order'
import './Ticker.css'

interface TickerProps {
  instrument: InstrumentType
  deleteTicker: (id: number) => void
  setIsOpenTickerModalWindow: React.Dispatch<React.SetStateAction<boolean>>
}

export const Ticker: FC<TickerProps> = ({
  instrument,
  deleteTicker,
  setIsOpenTickerModalWindow,
}) => {
  const { setOrdersList } = useContext(OrdersListContext)
  const [currentVolume, setCurrentVolume] = useState('0')
  const { id, name, ask, bid } = instrument

  const addOrder = (side: OrderSide) =>
    useCallback(() => {
      const amount = Number(currentVolume)
      if (amount) {
        const price = side === OrderSide.buy ? ask : bid
        const newOrderData = {
          side,
          price,
          instrument: name,
          amount,
        }
        const newOrder = new Order(newOrderData)

        console.log('Отправляем на сервер новую заявку: ', newOrder)

        setOrdersList(prev => [...prev, newOrder])
        setCurrentVolume('0')
      }
    }, [currentVolume])

  const handlerChangeVolume = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) >= 0) {
      setCurrentVolume(target.value)
    } else {
      setCurrentVolume('0')
    }
  }

  const handlerChangeInstrument = () => {
    deleteTicker(id)
    setIsOpenTickerModalWindow(true)
  }

  return (
    <div className="ticker">
      <button
        type="button"
        className="ticker-title"
        onClick={handlerChangeInstrument}>
        {name}
      </button>
      <input
        name="volume"
        type="number"
        className="ticker-volume"
        min="0"
        value={currentVolume}
        onChange={handlerChangeVolume}
      />
      <div className="ticker-control">
        <div className="ticker-section ticker-left-section">
          <h3 className="ticker-section-price">{bid}</h3>
          <button
            type="button"
            className="ticker-control-button bg-red"
            onClick={addOrder(OrderSide.sell)}>
            Sell
          </button>
        </div>
        <div className="ticker-section ticker-right-section">
          <h3 className="ticker-section-price">{ask}</h3>
          <button
            type="button"
            className="ticker-control-button bg-green"
            onClick={addOrder(OrderSide.buy)}>
            Buy
          </button>
        </div>
      </div>
      <button
        type="button"
        className="ticker-off"
        onClick={() => deleteTicker(id)}>
        x
      </button>
    </div>
  )
}
