import styled from 'styled-components'

const StyledCreateUserView = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  .field {
    border: 1px solid black;
    border-radius: 3px;
    outline: none;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.accent1};
      filter: brightness(70%);
    }
  }

  textarea {
    width: 90%;
    min-width: 500px;
    height: 200px;
    margin-bottom: 20px;
    resize: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.accent1};
    padding: 5px;
    border-radius: 3px;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    align-self: flex-start;
  }
`

export default StyledCreateUserView
