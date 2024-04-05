import styled from 'styled-components'

const StyledStatsView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    margin-top: 40px;
    padding: 5px 20px;
    border: 1px solid ${({ theme }) => theme.colors.accent2};
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    filter: brightness(70%);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
  }
`

export default StyledStatsView
