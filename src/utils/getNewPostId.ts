import Post from '../interfaces/Post'

const getNewPostId = (posts: Post[]) => {
  if (posts.length === 0) return 0
  posts.sort((a, b) => {
    return a.id < b.id ? 1 : -1
  })
  return posts[0].id + 1
}

export default getNewPostId
