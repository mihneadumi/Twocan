import styled from 'styled-components'

const StyledSideBar = styled.div`
  height: 100%;
  max-width: 320px;
  min-width: 120px;
  background-color: ${({ theme }) => theme.colors.base};
  border-right: 1px solid ${({ theme }) => theme.colors.accent1};
`

export default StyledSideBar
