import { useEffect, useState } from 'react'
import SideBar from '../Home/components/SideBar/SideBar'
import StyledUserProfileView from './styled/StyledUserProfileView'
import axios from 'axios'
import Post from '../../interfaces/Post'
import Scroller from '../Home/components/Scroller/Scroller'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserById } from '../../redux/selectors'
import { RootState } from '../../redux/store'
import UserProfileHeader from './components/UserProfileHeader/UserProfileHeader'

const UserProfileView = () => {
  const userId = useParams().id
  const userIdNumber = parseInt(userId!)
  const user = useSelector((state: RootState) =>
    getUserById(state, userIdNumber)
  )

  const [userPosts, setUserPosts] = useState<Post[]>([])
  useEffect(() => {
    axios
      .get(`https://localhost:7111/twocan/users/${user!.id}/posts`)
      .then((response) => {
        setUserPosts(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user posts:', error)
      })
  }, [user])

  return (
    <StyledUserProfileView>
      <SideBar />
      <div id='feed'>
        <UserProfileHeader user={user!} />
        {!userPosts.length ? (
          <p>User has no posts</p>
        ) : (
          <Scroller posts={userPosts} hasPagination={false} />
        )}
      </div>
    </StyledUserProfileView>
  )
}

export default UserProfileView
