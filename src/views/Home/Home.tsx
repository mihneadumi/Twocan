import StyledHome from './styled/StyledHome'
import UsersTable from '../../components/UsersTable/UsersTable'
import user_data from '../../constants/mock_data'
import Header from './components/Header/Header'

const Home = () => {
  const simplified_data = user_data.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName
    }
  })

  return (
    <StyledHome>
      <Header title='Users' />
      <UsersTable entitites={simplified_data} />
    </StyledHome>
  )
}

export default Home
