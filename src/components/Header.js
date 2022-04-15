import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount, getCount } from '../features/posts/postsSlice'

const Header = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)

  return (
    <header>
      <h1>Redux Toolkit Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='post'>Post</Link>
            <Link to='user'>User</Link>
          </li>
        </ul>
      </nav>
      <button className='countButton' onClick={() => dispatch(increaseCount())}>
        {count}
      </button>
    </header>
  )
}

export default Header
