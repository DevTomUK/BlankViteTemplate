import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

  return (

    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span>Brand Name</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <Link to={'./'}>
              <li className='navbar-link'>
                Home
              </li>
            </Link>
            <Link to={'./pagetwo'}>
              <li className='navbar-link'>
                Two
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>

  )
}
