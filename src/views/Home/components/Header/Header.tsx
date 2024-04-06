import { useSelector } from 'react-redux'
import StyledHeader from './styled/StyledHeader'
import { getPostsError, getPostsIsOnline } from '../../../../redux/selectors'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  const isError = useSelector(getPostsError)
  const isOnline = useSelector(getPostsIsOnline)

  if (!isOnline) {
    return (
      <StyledHeader>
        <p>Looks like you are offline</p>
      </StyledHeader>
    )
  }

  if (isError) {
    return (
      <StyledHeader>
        <p>The server is unavailable right now</p>
      </StyledHeader>
    )
  }

  return (
    <StyledHeader>
      <p>{title ? title : 'Posts for you'}</p>
    </StyledHeader>
  )
}

export default Header
