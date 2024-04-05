import styled from 'styled-components'

const StyledScroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;

  padding-top: 0;

  overflow: scroll;
  scrollbar-width: none; /* hide the scrollbar for Firefox */
  -ms-overflow-style: none; /* hide the scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* hide the scrollbar for Chrome, Safari, and Opera */
  }

  #end {
    align-self: center;
  }
`

export default StyledScroller
