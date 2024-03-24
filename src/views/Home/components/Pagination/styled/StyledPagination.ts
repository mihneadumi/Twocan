import styled from 'styled-components'

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: -10px;
  margin-bottom: 1rem;
  align-self: center;

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`

export default StyledPagination
