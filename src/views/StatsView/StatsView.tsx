import StyledStatsView from './styled/StyledStatsView'
import { PieChart } from '@mui/x-charts'
import { useSelector } from 'react-redux'
import { getPosts, getPostsLoading, getUsers } from '../../redux/selectors'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

const StatsView = () => {
  const navigate = useNavigate()
  const users = useSelector(getUsers)
  const posts = useSelector(getPosts)

  const userScores = users.map((user) => {
    const userPosts = posts.filter((post) => post.authorId === user.id)
    const score = userPosts.reduce((acc, post) => acc + post.score, 0)
    return { id: user.id, value: score, label: user.username }
  })

  const handleBack = () => {
    navigate('/posts')
  }

  const isLoading = useSelector(getPostsLoading)
  return (
    <StyledStatsView>
      <h1>Upvotes per user</h1>
      {isLoading ? (
        <CircularProgress color='inherit' />
      ) : (
        <PieChart
          series={[
            {
              data: userScores
            }
          ]}
          width={600}
          height={200}
          sx={{ margin: 'auto' }}
        />
      )}

      <button onClick={handleBack}>Back</button>
    </StyledStatsView>
  )
}

export default StatsView
