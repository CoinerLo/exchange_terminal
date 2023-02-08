import { Link } from 'react-router-dom'
import { AppRoute } from '../../utils/Enums'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="header-nav--item" to={AppRoute.index}>
          На главную
        </Link>
        <Link className="header-nav--item" to={AppRoute.listRequisitions}>
          Список заявок
        </Link>
      </nav>
    </header>
  )
}
