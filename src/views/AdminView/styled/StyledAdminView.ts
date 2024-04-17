import styled from 'styled-components'

const StyledAdminView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.text};
`

export default StyledAdminView
