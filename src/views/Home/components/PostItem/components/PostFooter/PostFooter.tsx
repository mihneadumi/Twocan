import StyledPostFooter from './styled/StyledPostFooter'

interface PostFooterProps {
  date: string
  score: number
}

const PostFooter = ({ date, score }: PostFooterProps) => {
  return (
    <StyledPostFooter>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </StyledPostFooter>
  )
}

export default PostFooter
