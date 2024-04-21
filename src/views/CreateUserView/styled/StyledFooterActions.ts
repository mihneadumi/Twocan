import { styled } from 'styled-components'

const StyledFooterActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;

  .button {
    padding: 5px 20px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &.back {
      background-color: ${({ theme }) => theme.colors.accent2};
    }

    &.create {
      background-color: ${({ theme }) => theme.colors.text_highlight};
    }
  }

  .button:hover {
    filter: brightness(70%);
  }
`

export default StyledFooterActions
