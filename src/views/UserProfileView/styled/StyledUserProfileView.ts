import styled from 'styled-components'

const StyledUserProfileView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  #feed {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 60%;
    height: 100%;
  }
`

export default StyledUserProfileView
