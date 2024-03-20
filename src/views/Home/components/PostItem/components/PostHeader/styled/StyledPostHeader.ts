import styled from 'styled-components'

const StyledPostHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .rowActionIcon {
    display: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(70%);
    }
  }

  #postActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`

export default StyledPostHeader
