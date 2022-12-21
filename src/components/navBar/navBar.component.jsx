import './navBar.styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
      <h2>NavBar</h2>
      <nav>
        <ul className='nav-bar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar