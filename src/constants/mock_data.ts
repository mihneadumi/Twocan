import Post from '../interfaces/Post'
import User from '../interfaces/User'

export const mockUsers: User[] = [
  {
    id: 0,
    username: 'aliciaH',
    displayName: 'Alicia H',
    posts: 2,
    followers: 0,
    following: 0,
    bio: 'I am a developer'
  },
  {
    id: 1,
    username: 'billyBal',
    displayName: 'Billy Balosu',
    posts: 1,
    followers: 0,
    following: 0,
    bio: 'I am definitely not a bot'
  },
  {
    id: 2,
    username: 'SunshineLove123',
    displayName: 'Samira',
    posts: 1,
    followers: 0,
    following: 0,
    bio: 'It is always sunny in my world'
  },
  {
    id: 3,
    username: 'ye',
    displayName: 'Kanye East',
    posts: 1,
    followers: 0,
    following: 0,
    bio: 'I am the Greatest artist of all T I M E'
  }
]

export const mockPosts: Post[] = [
  {
    id: 0,
    authorId: 0,
    title: 'My first post',
    content: 'This is my first post on this platform',
    score: 0,
    date: '2023-12-27'
  },
  {
    id: 1,
    authorId: 1,
    title: 'Looking for ballers',
    content:
      'I am looking for people to play basketball with. Preferably black, 6\'5" and above and no criminal record',
    score: 0,
    date: '2024-02-14'
  },
  {
    id: 2,
    authorId: 2,
    title: 'Why is the sky blue?',
    score: 0,
    date: '2024-02-14'
  },
  {
    id: 3,
    authorId: 3,
    title: 'Hear me out guys',
    content:
      'Every human being has something of value that they brought to the table, especially Hitler',
    score: 0,
    date: '2024-03-09'
  },
  {
    id: 4,
    authorId: 0,
    title: 'This is a bot post',
    content:
      'Playwright is a decent testing framework because i cant make jest work how I want damn',
    score: 0,
    date: '2024-03-09'
  },
  {
    id: 5,
    authorId: 0,
    title: 'I am looking for a job',
    content:
      'I can sing, dance, cook meth, code, cut hair, and do a lot of other things, Please hmu if you have a job for me',
    score: 0,
    date: '2024-03-09'
  },
  {
    id: 6,
    authorId: 1,
    title: 'Kanye shut yo bitch ass up and drop Vultures 2 man fr',
    score: 12,
    date: '2024-03-10'
  },
  {
    id: 7,
    authorId: 0,
    title: 'I am looking for a job',
    content:
      'I can sing, dance, cook meth, code, cut hair, and do a lot of other things, Please hmu if you have a job for me',
    score: 0,
    date: '2024-03-14'
  },
  {
    id: 8,
    authorId: 2,
    title: 'I made that b famooooous',
    score: 10,
    date: '2024-03-16'
  }
]
