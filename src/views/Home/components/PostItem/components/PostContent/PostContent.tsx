import StyledPostContent from './styled/StyledPostContent'

interface PostContentProps {
  content?: string
}

const PostContent = ({ content }: PostContentProps) => {
  return (
    <>
      {content ? (
        <StyledPostContent>
          <p>{content}</p>
        </StyledPostContent>
      ) : (
        <></>
      )}
    </>
  )
}

export default PostContent
