import { Link, useNavigate, useParams } from 'react-router-dom'
import user_data from '../../constants/mock_data'
import StyledDetailedView from './styled/StyledDetailedView'
import { useEffect } from 'react'

const DetailedView = () => {
  const navigate = useNavigate()

  const id = useParams().id
  const user = user_data.find((user) => user.id.toString() === id)
  console.log(user)

  useEffect(() => {
    if (!user) {
      navigate('/error')
    }
  }, [user, navigate])
  return (
    user && (
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
  )
}

export default DetailedView
