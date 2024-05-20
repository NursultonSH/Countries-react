import './DropDown.scss'
import dropDown from '../../assets/icons/dropDown.svg'
import { useState } from 'react'


const DropDown = ({isSelected,setIsSelected}) => {
    const [isActive, setIsActive] = useState(false)

    const showDropDown = () => {
        setIsActive(!isActive)
    }

    const changeDropDownValue = (e) => {
        setIsSelected(e.target.textContent)
        setIsActive(false)
    }

    const options = ['All','Africa','America','Asia','Europe','Oceania']

    return (
        <div className="dropDown">
            <div onClick={showDropDown} className='dropDown-btn'>
                <p>{isSelected}</p>
                <svg className={isActive ? 'dropDown-img' : 'rotate-img'}  width="9.000000" height="5.000000" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	                <path id="Shape" d="M7.44 -0.56L4 2.9L0.55 -0.56L-0.5 0.49L4 5L8.5 0.49L7.44 -0.56Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd"/>
                </svg>
            </div>
            {isActive && (
                <div className='dropDown-content'>
                    {options.map((option) => (
                        <p onClick={changeDropDownValue} className='dropDown-item'>{option}</p>
                    ))}    
                </div>
            )}
        </div>
    )
}

export default DropDown