import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../image/costs_logo.png'


function Navbar() {
    return (
      <nav className= {styles.navbar}>
          <Link to= "/">
            <img src={logo} alt="costs"/>
          </Link>
          <ul className= {styles.list}>
            <li className= {styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className= {styles.item}>
              <Link to="/contato">Contato</Link>
            </li>
            <li className= {styles.item}>
              <Link to="/newproject">Novo </Link>
            </li>
            <li className= {styles.item}>
              <Link to="/company">Company</Link>
            </li>
          </ul>
      </nav>
    )
  }
  
  export default Navbar