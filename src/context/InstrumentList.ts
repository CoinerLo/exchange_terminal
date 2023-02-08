import { createContext } from 'react'
import { InstrumentType } from '../types'

interface InstrumentListContextType {
  instrumentList: [] | InstrumentType[]
  setInstrumentList: React.Dispatch<React.SetStateAction<[] | InstrumentType[]>>
}

export const InstrumentListContext = createContext<InstrumentListContextType>({
  instrumentList: [],
  setInstrumentList: () => undefined,
})
