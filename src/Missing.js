import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, that's dissapointing.</p>
      <p>
        <Link to="/">Wisit Our Homepage</Link>
      </p>
    </main>
  )
}

export default Missing
