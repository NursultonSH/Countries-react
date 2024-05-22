// scss
import './Header.scss'

//images
import lightMode from '../../assets/icons/lightMode.svg'
import darkMode from '../../assets/icons/darkMode.svg'

//Context
import { Context } from '../../context'

//React
import { useContext } from 'react'

const Header = () => {
  const {state, dispatch} = useContext(Context)
  
  const changeMode = () => {
    dispatch({type : "CHANGE_MODE"})
  }

  return (
    <header>
      <div className='header-item container'>
        <h1>Where in the world?</h1>
        <div onClick={changeMode} className='mode'>
          <img src={state.isDarkMode ? darkMode : lightMode} alt="" />  
          <p>Light Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header