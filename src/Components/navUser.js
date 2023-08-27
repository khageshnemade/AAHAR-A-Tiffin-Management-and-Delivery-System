import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NavUser = () => {
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage['id'] = null
    console.log(sessionStorage['id'])
    sessionStorage['loginStatus'] = null
    navigate('/signin')
  }
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-grey'
      style={{ backgroundColor: '#4caf95' }}>
      <a
        className='navbar-brand'
        href='/showTiffin'
        style={{ fontWeight: 'bold', color: 'white' }}>
        {' '}
        <h2>Aahar</h2>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link
              className='nav-link '
              to={'/address'}
              style={{ color: 'wheat' }}>
              Add Address
            </Link>
          </li>
          <li className='nav-item active'>
            <Link
              className='nav-link '
              to={'/userProfile'}
              style={{ color: 'wheat' }}>
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <button
          type='submit'
          style={{ width: 100 }}
          onClick={Logout}
          className='btn btn-danger'>
          Logout
        </button>
      </ul>
      <ul>{''}</ul>
    </nav>
  )
}

export default NavUser
