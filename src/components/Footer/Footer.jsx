// React
import { useContext } from 'react'

// scss
import './Footer.scss'

// Context
import { Context } from '../../context'

const Footer = () => {
  const { state:{pagination,filterCountries}, dispatch } = useContext(Context)

  const addCountPagination = () => {
    dispatch({type : "ADD_COUNT_PAGINATION"})
  }
  const showAll = () => {
    dispatch({type : "SHOW_ALL"})
  }
  const showOnly = () => {
    dispatch({type : "SHOW_ONLY"})
  }

  return (
    <footer className='container'>
      {pagination < filterCountries.length ? <button onClick={addCountPagination}>show more</button> : null}
      {pagination < filterCountries.length ? <button onClick={showAll}>Show all</button> : null}
      {pagination > 8 ? <button onClick={showOnly}>Show only 8</button> : null}
    </footer>
  )
}

export default Footer