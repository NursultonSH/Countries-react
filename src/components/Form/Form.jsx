import './Form.scss'
import search from '../../assets/icons/search.svg'
import DropDown from '../DropDown/DropDown'

const Form = ({isSelected,setIsSelected,inputText,handleInputText}) => {
  return (
    <form className='container'>
        <div className='input-box'>
            <img src={search} alt="" />
            <input 
                  type="search" 
                  name="" 
                  id="" 
                  placeholder='Search for a country…' 
                  onChange={handleInputText}
                  value={inputText}
            />
        </div>
        <DropDown isSelected={isSelected} setIsSelected={setIsSelected} /> 
    </form>
  )
}

export default Form