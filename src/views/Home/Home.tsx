import UsersTable from '../../components/UsersTable/UsersTable'
import user_data from '../../constants/mock_data'
import Header from './components/Header/Header'
import StyledPage from '../../styled/StyledPage'

const Home = () => {
  const simplified_data = user_data.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName
    }
  })

  return (
    <StyledPage>
      <Header title='Users' />
      <UsersTable entitites={simplified_data} />
    </StyledPage>
  )
}

export default Home
