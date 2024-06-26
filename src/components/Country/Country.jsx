// scss
import './Country.scss'

const Country = ({
                  getModalInfos,
                  country:{name : {common : name}},
                  country:{region},
                  country:{capital},
                  country:{population},
                  country:{flags:{png,alt}},
}) => {

  return (
    <div onClick={getModalInfos} className='country'>
      <img src={png} alt={alt} />
      <div className='country-content'>
        <p className='name'>{name}</p>
          <div className="country-info">
            <p className='info'>Population : <span>{population.toLocaleString('ko-KR')}</span></p>
            <p className='info'>Region : <span>{region}</span></p>
            <p className='info'>Capital : <span>{capital ? capital : 'no capital'}</span></p>
          </div>
      </div>
    </div>
  )
}
export default Country