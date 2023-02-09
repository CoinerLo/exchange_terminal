import { render, screen } from '@testing-library/react'
import { Ticker } from './'
import { Instrument } from '../../utils/Enums'
import { WSTransport } from '../../services/WSTransport'

const tickerInstrument = Instrument.eur_rub

const mockInstrument = {
  id: 1,
  name: tickerInstrument,
  bid: '1000',
  ask: '1000',
}

const mockProps = {
  instrument: mockInstrument,
  deleteTicker: () => undefined,
  setIsOpenTickerModalWindow: () => undefined,
  wsConnect: new WSTransport(),
}

describe('Ticker test', () => {
  test('instrument', () => {
    render(
      <Ticker
        deleteTicker={mockProps.deleteTicker}
        instrument={mockProps.instrument}
        setIsOpenTickerModalWindow={mockProps.setIsOpenTickerModalWindow}
        wsConnect={mockProps.wsConnect}
      />
    )
    expect(screen.getByText(tickerInstrument)).toBeDefined()
  })
})
