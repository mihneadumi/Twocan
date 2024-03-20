import styled from 'styled-components'

const StyledPostContent = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

export default StyledPostContent
