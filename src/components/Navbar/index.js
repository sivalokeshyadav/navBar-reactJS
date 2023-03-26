// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const changeToggle = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItem = isDarkTheme ? 'light-color' : 'dark-color'
      const navBar = isDarkTheme ? 'dark' : 'light'

      return (
        <>
          <nav className={`${navBar} nav-container`}>
            <div className="website-logo-container">
              <img src={logoUrl} alt="website logo" className="website-logo" />
            </div>
            <div className="nav-item-container">
              <ul className="website-items-container">
                <Link to="/" className="nav-link">
                  <li className={`${navItem}`}>Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className={`${navItem}`}>About</li>
                </Link>
              </ul>
            </div>
            <div className="btn-container">
              <button
                className="toggle-button"
                type="button"
                onClick={onToggleTheme}
                data-testid="theme"
              >
                <img src={changeToggle} alt="theme" className="toggle-icon" />
              </button>
            </div>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
