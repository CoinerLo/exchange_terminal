import { createContext } from 'react'
import type { WSTransport } from '../services/WSTransport'

interface ConnectContextType {
  wsConnect: null | WSTransport
  setWsConnect: React.Dispatch<React.SetStateAction<null | WSTransport>>
}

export const ConnectContext = createContext<ConnectContextType>({
  wsConnect: null,
  setWsConnect: () => undefined,
})
