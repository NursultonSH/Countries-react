import { useContext } from 'react'
import Country from '../Country/Country'

import './Countries.scss'
import { Context } from '../../context'

const Countries = () => {

  const {state, dispatch} = useContext(Context)

  return (
    <div className='countries container' >
        {state.filterCountries.slice(0,state.pagination).map((country) => {
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