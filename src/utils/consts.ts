import { InstrumentType } from '../types'
import { Instrument } from './Enums'

export const instrument: InstrumentType[] = [
  {
    id: 1,
    name: Instrument.eur_usd,
    bid: (1.0708).toFixed(4),
    ask: (1.071).toFixed(4),
  },
  {
    id: 2,
    name: Instrument.eur_rub,
    bid: (76.0625).toFixed(4),
    ask: (76.085).toFixed(4),
  },
  {
    id: 3,
    name: Instrument.usd_rub,
    bid: (71.0075).toFixed(4),
    ask: (71.015).toFixed(4),
  },
  {
    id: 4,
    name: Instrument.usd_jpy,
    bid: (128.609).toFixed(3),
    ask: (128.61).toFixed(3),
  },
  {
    id: 5,
    name: Instrument.gpb_usd,
    bid: (1.1988).toFixed(4),
    ask: (1.1995).toFixed(4),
  },
  {
    id: 6,
    name: Instrument.nzd_usd,
    bid: (0.63).toFixed(3),
    ask: (0.631).toFixed(3),
  },
  {
    id: 7,
    name: Instrument.usd_chf,
    bid: (0.9265).toFixed(4),
    ask: (0.9266).toFixed(4),
  },
]
