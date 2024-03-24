import { styled } from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;

  p {
    margin: 10px 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

export default StyledHeader
