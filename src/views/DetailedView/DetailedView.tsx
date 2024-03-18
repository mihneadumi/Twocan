import { Link, useNavigate, useParams } from 'react-router-dom'
import StyledDetailedView from './styled/StyledDetailedView'
import { useEffect } from 'react'
import { users } from '../../constants/mock_data'

const DetailedView = () => {
  const navigate = useNavigate()

  const id = useParams().id
  const user = users.find((user) => user.id.toString() === id)

  useEffect(() => {
    if (!user) {
      navigate('/error')
    }
  }, [navigate, user])
  return (
    user && (
      <StyledDetailedView>
        <h1>{user.username}</h1>
        <Link to='/'>Back</Link>
      </StyledDetailedView>
    )
  )
}

export default DetailedView
