import styled from 'styled-components'
import StyledPage from '../../../styled/StyledPage'

const StyledErrorPage = styled(StyledPage)`
  img {
    width: 760px;
    border-radius: 10%;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.accent1};
    transition: 0.3s;
  }

  a:hover {
    box-shadow: inset 0 0 100px 0 ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.hovered};
  }
`

export default StyledErrorPage
