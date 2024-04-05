import Switch from '@mui/material/Switch'
import StyledHeader from './styled/StyledHeader'
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import StyledPaginationSection from './styled/StyledPaginationSection'

interface HeaderProps {
  title?: string
  hasPagination?: boolean
  setPagination?: (value: boolean) => void
  postsPerPage?: number
  setPostsPerPage?: (value: number) => void
}

const Header = ({
  title,
  hasPagination,
  setPagination,
  postsPerPage = 0,
  setPostsPerPage
}: HeaderProps) => {
  const handlePaginationChange = () => {
    setPagination!(!hasPagination)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPostsPerPage!(parseInt(event.target.value))
  }
  return (
    <StyledHeader>
      <p>{title ? title : 'Posts for you'}</p>
      {setPagination && setPostsPerPage && (
        <StyledPaginationSection>
          {hasPagination && (
            <Box sx={{ minWidth: 140, maxHeight: 30, padding: 0 }}>
              <FormControl fullWidth>
                <InputLabel id='selectLabel'>Nr of posts per page</InputLabel>
                <Select
                  labelId='selectLabel'
                  id='simpleSelect'
                  value={postsPerPage.toString()}
                  label='Nr of posts per page'
                  onChange={handleChange}
                >
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
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
        </StyledPaginationSection>
      )}
    </StyledHeader>
  )
}

export default Header
