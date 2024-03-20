import styled from 'styled-components'

const StyledSideBar = styled.div`
  height: 100%;
  max-width: 320px;
  min-width: 120px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.base};
  border-right: 1px solid ${({ theme }) => theme.colors.accent1};

  .button {
    padding: 5px 20px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    filter: brightness(70%);
  }
`

export default StyledSideBar
