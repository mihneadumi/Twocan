import styled from 'styled-components'

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h3 {
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  #displayName {
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  #username {
    margin: 0;
    font-size: 1em;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent2};
  }

  #username:hover {
    color: ${({ theme }) => theme.colors.text_highlight};
    cursor: pointer;
  }
`

export default StyledInformation
