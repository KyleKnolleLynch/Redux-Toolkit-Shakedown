import PostAuthor from './PostAuthor'
import Timeago from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <Timeago timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt
