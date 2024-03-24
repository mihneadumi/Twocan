import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'
import Post from '../../interfaces/Post'
import { useState } from 'react'

interface HomeProps {
  posts: Post[]
}

const Home = ({ posts }: HomeProps) => {
  const [hasPagination, setHasPagination] = useState(true)

  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header
          hasPagination={hasPagination}
          setPagination={setHasPagination}
        />
        <Scroller posts={posts} hasPagination={hasPagination} />
      </div>
    </StyledHome>
  )
}

export default Home
