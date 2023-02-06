import { Route, Routes } from 'react-router-dom'
import { AppRoute } from './Enums'
import { Home } from './pages/Home'
import { ListRequisitions } from './pages/ListRequisitions'
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoute.index} element={<Home />} />
        <Route
          path={AppRoute.listRequisitions}
          element={<ListRequisitions />}
        />
      </Routes>
    </>
  )
}

export default App
