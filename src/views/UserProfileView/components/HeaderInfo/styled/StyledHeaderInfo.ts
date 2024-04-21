import styled from 'styled-components'

const StyledHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 40px;
  h1 {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  h2 {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
  }

  #stats {
    margin-top: 20px;
  }

  #deleteUser {
    padding: 5px 20px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;
    background-color: #ff4d4d;

    &:hover {
      filter: brightness(70%);
    }
  }
`
export default StyledHeaderInfo
