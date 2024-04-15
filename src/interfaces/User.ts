interface User {
  id: number
  username: string
  displayName: string
  posts: number[]
  followers: number
  following: number
  bio: string
}

export default User
