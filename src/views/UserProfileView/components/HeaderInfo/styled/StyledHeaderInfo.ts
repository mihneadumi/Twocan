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
`
export default StyledHeaderInfo
