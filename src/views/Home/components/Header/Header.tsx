import StyledHeader from './styled/StyledHeader'

interface HeaderProps {
  title?: string
  hasPagination?: boolean
  setPagination?: (value: boolean) => void
}

const Header = ({ title, hasPagination, setPagination }: HeaderProps) => {
  return (
    <StyledHeader>
      <p>{title ? title : 'Posts for you'}</p>
      {setPagination && (
        <button onClick={() => setPagination(!hasPagination)}>
          Toggle pagination
        </button>
      )}
    </StyledHeader>
  )
}

export default Header
