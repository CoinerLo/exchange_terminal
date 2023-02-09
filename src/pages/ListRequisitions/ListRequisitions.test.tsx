import { render, screen } from '@testing-library/react'
import { ListRequisitions } from './index'

const title = 'Список заявок'

describe('List requisitions test', () => {
  test('title', () => {
    render(<ListRequisitions />)
    expect(screen.getByText(title)).toBeDefined()
  })
})
