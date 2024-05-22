import { useContext } from 'react'
import './Footer.scss'
import { Context } from '../../context'

const Footer = () => {

  const { state, dispatch } = useContext(Context)

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
        {state.pagination < state.filterCountries.length ? <button onClick={addCountPagination}>show more</button> : null}
        {state.pagination < state.filterCountries.length ? <button onClick={showAll}>Show all</button> : null}
        {state.pagination > 8 ? <button onClick={showOnly}>Show only 8</button> : null}
    </footer>
  )
}

export default Footer