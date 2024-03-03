import { Link } from 'react-router-dom'
import StyledPage from '../../styled/StyledPage'
import StyledErrorPage from './styled/StyledErrorPage'

const ErrorPage = () => {
  console.log('ErrorPage')
  return (
    <StyledErrorPage>
      <img src='./patrick.jpg' />
      <h1>Oops, you've reached a page that doesn't exist</h1>
      <Link to='/'>Go back to the home page</Link>
    </StyledErrorPage>
  )
}

export default ErrorPage
