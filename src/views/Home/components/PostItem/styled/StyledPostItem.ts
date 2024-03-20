import styled from 'styled-components'

const StyledPostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 590px;
  min-width: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid ${({ theme }) => theme.colors.accent1};
  border-radius: 10px;

  #content {
    // make the content text overflow with an ellipsis
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  #postFooter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }

  &:hover {
    .rowActionIcon {
      display: block;
    }
    .rowActionIcon:hover {
      color: ${({ theme }) => theme.colors.text_highlight};
    }
    #deleteIcon:hover {
      color: red;
    }
  }
`

export default StyledPostItem
