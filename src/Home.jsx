import { Link, NavLink } from 'react-router-dom'
import Content from './Content'

const Home = () => {
  const token = localStorage.getItem('TOKEN')
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav
          className='navbar navbar-expand-lg'
          style={{ backgroundColor: ' #e3f2fd' }}
        >
          <div className='container'>
            <a
              className='navbar-brand'
              style={{ fontWeight: 'bold', color: 'darkBlue' }}
            >
              <span style={{ fontSize: '1.9rem' }}>C</span>RM.COM
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav ms-auto'>
                <a className='nav-link'>
                  <NavLink className='navbar-brand' to='/signin'>
                    Login
                  </NavLink>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Content />
    </div>
  )
}
export default Home