import StyledHeader from './styled/StyledHeader'

interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <p>{title ? title : 'Posts for you'}</p>
    </StyledHeader>
  )
}

export default Header
