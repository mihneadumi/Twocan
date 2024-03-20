import { styled } from 'styled-components'

const StyledModalActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  .button {
    padding: 5px 20px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &.cancel {
      background-color: ${({ theme }) => theme.colors.accent2};
    }

    &.delete {
      background-color: #ff4d4d;
    }
  }

  .button:hover {
    filter: brightness(70%);
  }
`
export default StyledModalActions
