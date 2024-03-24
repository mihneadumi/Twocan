import StyledStatsView from './styled/StyledStatsView'
import Post from '../../interfaces/Post'
import { mockUsers } from '../../constants/mock_data'
import { PieChart } from '@mui/x-charts'

interface StatsViewProps {
  posts: Post[]
}

const StatsView = ({ posts }: StatsViewProps) => {
  const users = mockUsers
  // show a pie chart of the total score of all posts by each user
  // the pie chart should have the user's name as the label
  // and the total score of all their posts as the value
  // piechart example:
  // <PieChart
  //       series={[
  //         {
  //           data: [
  //             { id: 0, value: 10, label: 'series A' },
  //             { id: 1, value: 15, label: 'series B' },
  //             { id: 2, value: 20, label: 'series C' }
  //           ]
  //         }
  //       ]}
  //       width={400}
  //       height={200}
  //     />

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
