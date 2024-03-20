import styled from 'styled-components'

const StyledConfirmDeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  #confirmDelete {
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  #confirmDelete:hover {
    color: ${({ theme }) => theme.colors.text_highlight};
    cursor: pointer;
  }
`

export default StyledConfirmDeleteModal
