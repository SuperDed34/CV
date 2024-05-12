import './header.css'
import logo from '../assets/logo.png'
import BurgerMenu from './burger'

function Header() {

  let navItems = {
    'Home': './',
    'About me': '#About',
    'My skills': '#Skills',
    'Employment histrory': '#Employment',
    'Education': '#Education',
    'Work examples': 'https://github.com/SuperDed34?tab=repositories'
  }
  const Nav = (
    <nav className="navigation">
        <ul className="nav-bar">
            {Object.entries(navItems).map(([label, link], index) => (
              <li className='nav-item' key={index}>
                <a href={link}>{label}</a>
              </li>
            ))}
        </ul>
      </nav>
  )

  return (
    <>
      <div className="logo-wrapper">
        <img className='logo' src={logo} alt='logo'></img>
        <BurgerMenu content={Nav}></BurgerMenu>
      </div>
      {Nav}
    </>
  )
}

export default Header