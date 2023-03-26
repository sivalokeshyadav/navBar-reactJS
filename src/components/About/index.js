import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const changeAboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const changeAboutBg = isDarkTheme ? 'black' : null

      const fontColor = isDarkTheme ? 'light-color' : null

      return (
        <>
          <Navbar />
          <div className={`${changeAboutBg} about-container`}>
            <img src={changeAboutImageUrl} className="about-icon" alt="about" />
            <h1 className={`${fontColor} heading`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
