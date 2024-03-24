import styled from 'styled-components'

const StyledDetailedView = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid ${({ theme }) => theme.colors.accent1};
  border-radius: 1rem;
  background-color: white;
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent1};
  }

  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    width: 100%;
    max-width: 200px;
    text-align: center;
    text-decoration: none;
    align-self: center;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.hovered};
    background-color: ${({ theme }) => theme.colors.accent2};
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.accent1};
    transition: 0.3s;
  }
  a:hover,
  a:active {
    box-shadow: inset 0 0 100px 0 ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.hovered};
  }

  a:active {
    scale: 0.95;
    box-shadow: inset 0 0 100px 0 ${({ theme }) => theme.colors.accent2};
  }
`
export default StyledDetailedView
