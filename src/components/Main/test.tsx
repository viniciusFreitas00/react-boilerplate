import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render main', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument()
  })
})
