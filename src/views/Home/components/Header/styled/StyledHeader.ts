import { styled } from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

export default StyledHeader
