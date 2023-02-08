import { memo } from 'react'
import './TickerModalWindowItem.css'

interface TickerModalWindowItemProps {
  instrument: string
  isActive: boolean
  onClickContentItem: () => void
}

export const TickerModalWindowItem = memo(function TickerModalWindowItem({
  instrument,
  isActive,
  onClickContentItem,
}: TickerModalWindowItemProps) {
  return (
    <li
      className={`ticker-modal-window-item ${isActive ? 'active-item' : ''}`}
      onClick={onClickContentItem}>
      {instrument}
    </li>
  )
})
