import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from './Header'

jest.mock('next/navigation', () => ({
      useRouter: jest.fn(() => ({
        push: jest.fn(),
      })),
      // useSearchParams: jest.fn(() => ({})),
      // usePathname: jest.fn(() => '/mocked-pathname'),
}));
 
describe('тесты для компоненты Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('Наличие кнопки', () => {
    const button = screen.getAllByRole('button')
 
    expect(button[0]).toBeInTheDocument()
  })

  it('2 кнопки на странице', () => {
    const buttons = screen.getAllByRole('button')
 
    expect(buttons.length).toBe(3)
  })

  it('Наличие линка', () => {
    const link = screen.getByTestId('link')
 
    expect(link).toBeInTheDocument()
  })

  it('Клик по кнопке изменил состояния', () => {
    const button = screen.getByTestId('btn')

    fireEvent.click(button)
 
    expect(button).toHaveTextContent('Кликали')
  })
})