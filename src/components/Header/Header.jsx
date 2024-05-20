import './Header.scss'
import lightMode from '../../assets/icons/lightMode.svg'
import darkMode from '../../assets/icons/darkMode.svg'

const Header = ({changeMode,isDarkMode}) => {
  return (
    <header>
      <div className='header-item container'>
        <h1>Where in the world?</h1>
        <div onClick={changeMode} className='mode'>
          <img src={isDarkMode ? darkMode : lightMode} alt="" />  
          <p>Light Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header