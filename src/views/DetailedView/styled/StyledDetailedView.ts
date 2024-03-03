import styled from 'styled-components'

const StyledDetailedView = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.accent1};
  border-radius: 1rem;
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
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.accent1};
    transition: 0.3s;
  }
  a:hover {
    // inset animation
    box-shadow: inset 0 50px 100px 0 ${({ theme }) => theme.colors.accent1};
    color: ${({ theme }) => theme.colors.hovered};
  }
`
export default StyledDetailedView
