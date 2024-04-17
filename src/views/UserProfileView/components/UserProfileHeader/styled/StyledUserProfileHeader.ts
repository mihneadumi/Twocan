import styled from 'styled-components'

const StyledUserProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  #coverImg {
    width: 100%;
    height: 256px;
    object-fit: cover;
  }
  #profileImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -75px;
    margin-left: 50px;
    // take border color from theme
    border: 7px solid ${({ theme }) => theme.colors.base};
  }
`
export default StyledUserProfileHeader
