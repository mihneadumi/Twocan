import { useNavigate } from 'react-router-dom'
import StyledAdminView from './styled/StyledAdminView'
import StyledAdminViewFooter from './styled/StyledAdminViewFooter'
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsPagination, getPostsPerPage } from '../../redux/selectors'
import {
  setPostsPerPageAction,
  switchPostsPaginationAction
} from '../../redux/slices/postsSlice'
import axios from 'axios'
import { useState } from 'react'

const AdminView = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [postsPerFiveSeconds, setPostsPerFiveSeconds] = useState(0)

  const handlePostsPerFiveSecondsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNaN(parseInt(event.target.value))) {
      setPostsPerFiveSeconds(0)
      return
    }

    if (parseInt(event.target.value) < 0) {
      setPostsPerFiveSeconds(0)
      return
    }
    setPostsPerFiveSeconds(parseInt(event.target.value))
  }
  const handleBackClick = () => {
    navigate('/')
  }

  const handleSaveClick = () => {
    axios
      .put(
        `https://localhost:7111/twocan/setBotsNumber/${postsPerFiveSeconds}`,
        {
          n: postsPerFiveSeconds
        }
      )
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        alert('Changes could not be saved. Please try again.')
      })
  }

  const handlePaginationChange = () => {
    dispatch(switchPostsPaginationAction())
  }
  const handlePostsPerPageSelect = (event: SelectChangeEvent) => {
    dispatch(setPostsPerPageAction(parseInt(event.target.value)))
  }

  const hasPagination = useSelector(getPostsPagination)
  const postsPerPage = useSelector(getPostsPerPage)

  return (
    <StyledAdminView>
      <h1>Admin Settings</h1>
      <FormControlLabel
        label='Pagination'
        control={
          <Switch
            checked={hasPagination}
            onChange={handlePaginationChange}
            color='default'
          />
        }
      />
      {hasPagination && (
        <Box sx={{ minWidth: 140, maxHeight: 80, margin: 1 }}>
          <FormControl fullWidth>
            <InputLabel id='selectLabel'>Nr of posts per page</InputLabel>
            <Select
              labelId='selectLabel'
              size='small'
              id='simpleSelect'
              value={postsPerPage.toString()}
              label='Nr of posts per page'
              onChange={handlePostsPerPageSelect}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
      <Box sx={{ maxWidth: 140, maxHeight: 80, margin: 1 }}>
        <TextField
          id='outlined-basic'
          label='Active Bots Number'
          size='small'
          variant='outlined'
          value={postsPerFiveSeconds}
          onChange={handlePostsPerFiveSecondsChange}
          color='primary'
        />
      </Box>
      <StyledAdminViewFooter>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleBackClick}>Cancel</button>
      </StyledAdminViewFooter>
    </StyledAdminView>
  )
}

export default AdminView
