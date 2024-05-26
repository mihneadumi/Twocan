import styled from 'styled-components'

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;

  h1 {
    font-size: 5rem;
    margin-top: -160px;
    margin-bottom: 160px;
    color: ${(props) => props.theme.colors.primary};
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 0px;
  }

  #buttons {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 5px 20px;
    min-width: 90px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }
`
export default StyledRegister
