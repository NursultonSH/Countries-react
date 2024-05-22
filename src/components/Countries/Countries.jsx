// React
import { useContext } from 'react'

// Component
import Country from '../Country/Country'

// scss 
import './Countries.scss'

// Context
import { Context } from '../../context'


const Countries = () => {
  const {state : {filterCountries, pagination}, dispatch} = useContext(Context)

  return (
    <div className='countries container' >
        {filterCountries.slice(0,pagination).map(country => {
            return(
              <Country 
                key={country.name.common} 
                country={country} 
                getModalInfos={()=> {
                                      dispatch({type : "TAKE_MODAL_INFOS", payload : country.name.common})
                                      dispatch({type : "CHANGE_MODAL_STATUS"})
                                    }
                              }
               />
            )
        })}
    </div>
  )
}

export default Countries