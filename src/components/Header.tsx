import { Link } from 'react-router-dom'
import { AppRoute } from '../Enums'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <Link className="header-nav--item" to={AppRoute.index}>
          На домашнюю
        </Link>
        <Link className="header-nav--item" to={AppRoute.listRequisitions}>
          Список заявок
        </Link>
      </div>
    </header>
  )
}
