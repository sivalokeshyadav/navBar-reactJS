// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const changeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const containerBackground = isDarkTheme ? 'black' : null
      const fontColor = isDarkTheme ? 'light' : null

      return (
        <>
          <Navbar />
          <div className={`${containerBackground} home-container`}>
            <img src={changeImageUrl} className="img-home" alt="home" />
            <h1 className={`heading ${fontColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
