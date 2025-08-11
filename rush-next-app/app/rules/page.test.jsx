import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Rules from './page'

describe('тесты для страницы Rules', () => {
  beforeEach(() => {
    render(<Rules />)
  })

  it('Наличие дива', () => {
    const div = screen.getByText('Правила нашего сайта')
 
    expect(div).toBeInTheDocument()
  })
})