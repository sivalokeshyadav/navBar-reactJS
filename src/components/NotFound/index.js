// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const changeNotBg = isDarkTheme ? 'black' : null

      const textColor = isDarkTheme ? 'light-color' : null

      return (
        <>
          <Navbar />
          <div className={`${changeNotBg} found-container`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-container"
              alt="not found"
            />
            <h1 className={`notfound-heading ${textColor}`}>Lost Your Way?</h1>
            <p className={`notfound-description ${textColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
