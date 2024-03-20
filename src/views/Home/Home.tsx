import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'
import Post from '../../interfaces/Post'

interface HomeProps {
  posts: Post[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header />
        <Scroller posts={posts} />
      </div>
    </StyledHome>
  )
}

export default Home
