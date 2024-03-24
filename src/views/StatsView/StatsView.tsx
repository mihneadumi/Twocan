import StyledStatsView from './styled/StyledStatsView'
import { PieChart } from '@mui/x-charts'
import { useSelector } from 'react-redux'
import { getPosts, getUsers } from '../../redux/selectors'

const StatsView = () => {
  const users = useSelector(getUsers)
  const posts = useSelector(getPosts)

  const userScores = users.map((user) => {
    const userPosts = posts.filter((post) => post.authorId === user.id)
    const score = userPosts.reduce((acc, post) => acc + post.score, 0)
    return { id: user.id, value: score, label: user.username }
  })

  return (
    <StyledStatsView>
      <h1>Stats View</h1>
      <PieChart
        series={[
          {
            data: userScores
          }
        ]}
        width={400}
        height={200}
        sx={{ margin: 'auto' }}
      />
    </StyledStatsView>
  )
}

export default StatsView
