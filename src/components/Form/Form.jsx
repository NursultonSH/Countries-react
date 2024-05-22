import './Form.scss'
import search from '../../assets/icons/search.svg'
import DropDown from '../DropDown/DropDown'
import { useContext } from 'react'
import { Context } from '../../context'

const Form = () => {

  const {state, dispatch} = useContext(Context)
  const filterFlags = e => {
    dispatch({type : "FILTER_FLAGS", payload : e.target.value})
  }

  return (
    <form className='container'>
        <div className='input-box'>
            <img src={search} alt="" />
            <input 
                  type="search" 
                  name="" 
                  id="" 
                  placeholder='Search for a country…' 
                  onChange={filterFlags}
            />
        </div>
        <DropDown /> 
    </form>
  )
}

export default Form