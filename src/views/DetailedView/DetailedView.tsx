import { Link, useNavigate, useParams } from 'react-router-dom'
import user_data from '../../constants/mock_data'
import StyledDetailedView from './styled/StyledDetailedView'

const DetailedView = () => {
  const id = useParams().id
  const user = id ? user_data.find((user) => user.id.toString() === id) : null
  const navigate = useNavigate()
  if (user === null) {
    navigate('/error')
  }
  return (
    <StyledDetailedView>
      <h1>
        Details for user: {user?.firstName} {user?.lastName}
      </h1>
      <p>
        <strong>Address:</strong> {user?.address}
      </p>
      <p>
        <strong>City:</strong> {user?.city}
      </p>
      <p>
        <strong>State:</strong> {user?.state}
      </p>
      <Link to='/'>Back</Link>
    </StyledDetailedView>
  )
}

export default DetailedView
