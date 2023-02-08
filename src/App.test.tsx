import { render, screen } from '@testing-library/react'
import App from './App'

const userSectionContent = 'Информация о пользователе'
const tickersSectionContent = 'Список тикеров'

describe('App test', () => {
  test('User section', () => {
    render(<App />)
    expect(screen.getByText(userSectionContent)).toBeDefined()
  })

  test('Tickers section', () => {
    render(<App />)
    expect(screen.getByText(tickersSectionContent)).toBeDefined()
  })
})
