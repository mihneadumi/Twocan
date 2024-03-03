import StyledHeader from './styled/StyledHeader'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  )
}

export default Header
