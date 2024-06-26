import styled from 'styled-components'

const StyledCreatePostView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  #createUser {
    margin-left: 20px;
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.accent2};

    &:hover {
      filter: brightness(70%);
    }
  }
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

export default StyledCreatePostView
