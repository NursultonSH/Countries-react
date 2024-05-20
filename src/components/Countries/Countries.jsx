import Country from '../Country/Country'
import './Countries.scss'

const Countries = ({countries,pagination,takeModalInfos}) => {
  return (
    <div className='countries container' >
        {countries.slice(0,pagination).map((country) => {
            return(
              <Country 
                      key={country.name.common} 
                      country={country} 
                      takeModalInfos={() => {takeModalInfos(country.name.common)}} />
            )
        })}
    </div>
  )
}

export default Countries