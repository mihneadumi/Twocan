import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'

const Home = () => {
  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header />
        <Scroller />
      </div>
    </StyledHome>
  )
}

export default Home
