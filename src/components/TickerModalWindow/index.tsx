import { FC, useCallback, useState } from 'react'
import { instrument } from '../../utils/consts'
import './TickerModalWindow.css'
import { TickerModalWindowItem } from '../TickerModalWindowItem'

interface TickerModalWindowProps {
  setIsOpenTickerModalWindow: React.Dispatch<React.SetStateAction<boolean>>
  selectTicker: (instrumentId: number) => void
}

const namesInstruments = instrument.map(({ name, id }) => ({ name, id }))

export const TickerModalWindow: FC<TickerModalWindowProps> = ({
  setIsOpenTickerModalWindow,
  selectTicker,
}) => {
  const [idCurrentElement, setIdCurrentElement] = useState<null | number>(null)

  const onClickContentItem = (id: number) =>
    useCallback(() => setIdCurrentElement(id), [])

  const onClickSelectElement = () => {
    if (idCurrentElement) {
      selectTicker(idCurrentElement)
      setIsOpenTickerModalWindow(false)
    }
  }

  return (
    <div className="ticker-modal-window">
      <div className="ticker-modal-window-content">
        <h1>Выберите инструмент</h1>
        <ul className="ticker-modal-window-content-list">
          {namesInstruments.map(({ name, id }) => (
            <TickerModalWindowItem
              key={id}
              instrument={name}
              isActive={idCurrentElement === id}
              onClickContentItem={onClickContentItem(id)}
            />
          ))}
        </ul>
        <button type="button" onClick={onClickSelectElement}>
          Выбрать
        </button>
        <button
          type="button"
          className="content-close"
          onClick={() => setIsOpenTickerModalWindow(false)}>
          X
        </button>
      </div>
    </div>
  )
}
