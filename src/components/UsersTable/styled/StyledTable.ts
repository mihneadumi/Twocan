import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  th {
    background-color: ${({ theme }) => theme.colors.primary};
    border: px solid ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.accent1};
    font-weight: normal;
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  td {
    text-align: center;
    border: 2px solid ${({ theme }) => theme.colors.accent1};
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  tbody > tr {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  tbody > tr:hover {
    color: ${({ theme }) => theme.colors.hovered};
    background-color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`
export default StyledTable
