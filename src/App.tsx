import { Route, Routes } from 'react-router-dom'
import { AppRoute } from './utils/Enums'
import { Home } from './pages/Home'
import { ListRequisitions } from './pages/ListRequisitions'
import { Header } from './components/Header'
import { InstrumentListContext } from './context/InstrumentList'
import { useState } from 'react'
import { InstrumentType } from './types'
import { OrdersListContext } from './context/OrdersList'
import type { Order } from './models/Order'
import { BrowserRouter } from 'react-router-dom'
import { WSTransport } from './services/WSTransport'
import { ConnectContext } from './context/Connect'
import './App.css'

function App() {
  const [instrumentList, setInstrumentList] = useState<[] | InstrumentType[]>(
    []
  )
  const [ordersList, setOrdersList] = useState<[] | Order[]>([])
  const [wsConnect, setWsConnect] = useState<null | WSTransport>(
    new WSTransport()
  )

  wsConnect?.connect() // По понятным причинам будет ошибка подключения в консоли

  return (
    <BrowserRouter>
      <ConnectContext.Provider value={{ wsConnect, setWsConnect }}>
        <OrdersListContext.Provider value={{ ordersList, setOrdersList }}>
          <InstrumentListContext.Provider
            value={{ instrumentList, setInstrumentList }}>
            <Header />
            <Routes>
              <Route path={AppRoute.index} element={<Home />} />
              <Route
                path={AppRoute.listRequisitions}
                element={<ListRequisitions />}
              />
            </Routes>
          </InstrumentListContext.Provider>
        </OrdersListContext.Provider>
      </ConnectContext.Provider>
    </BrowserRouter>
  )
}

export default App
