import styled from 'styled-components'

const StyledAdminViewFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;

  button {
    padding: 5px 20px;
    min-width: 90px;
    max-width: 90px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    filter: brightness(70%);
  }
`
export default StyledAdminViewFooter
