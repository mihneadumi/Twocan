import Switch from '@mui/material/Switch'
import StyledHeader from './styled/StyledHeader'
import { FormControlLabel } from '@mui/material'

interface HeaderProps {
  title?: string
  hasPagination?: boolean
  setPagination?: (value: boolean) => void
}

const Header = ({ title, hasPagination, setPagination }: HeaderProps) => {
  const handlePaginationChange = () => {
    setPagination!(!hasPagination)
  }
  return (
    <StyledHeader>
      <p>{title ? title : 'Posts for you'}</p>
      {setPagination && (
        <FormControlLabel
          control={
            <Switch
              checked={hasPagination}
              onChange={handlePaginationChange}
              color='default'
            />
          }
          label='Pagination'
        />
      )}
    </StyledHeader>
  )
}

export default Header
