import './Modal.scss'
import germany from '../../assets/images/germanyFlag.jpeg'
import cross from '../../assets/icons/cross.svg'

const Modal = ({
    setModalStatus,
    modalInfos:{name:{common}},
    modalInfos:{flags:{png}},
    modalInfos:{name:{nativeName}},
    modalInfos:{population},
    modalInfos:{region},
    modalInfos:{subregion},
    modalInfos:{capital},
    modalInfos:{tld},
    modalInfos:{currencies},
    modalInfos:{languages},
    modalInfos:{borders}
}) => {

    const allNativeName = Object.values(nativeName).map((item) => {
        return(
            <span>{item.common},</span>
        )
    })
    const takeCurrencies = Object.values(currencies)[0].name
    const takeLanguages = Object.values(languages).join(', ')
    const takeBorders = borders ? borders.map((item) => {
        return(
            <button>{item}</button>
        )
    }) : 'no border countries'


  return (
    <div className='modal'>
        <div className='modal-item'>
            <div className='main-item'>
                <img src={png} alt="" />
                <div className='modal-infos'>
                    <p className='name'>{common}</p>
                    <div className='about-country'>
                        <div className='infos'>
                            <p>Native Name : {allNativeName}</p>
                            <p>Population : <span>{population ? population.toLocaleString('ko-KR') : 'no population'}</span></p>
                            <p>Region : <span>{region ? region : "no region"}</span></p>
                            <p>Sub Region : <span>{subregion ? subregion : "no subregion"}</span></p>
                            <p>Capital : <span>{capital ? capital : "no capital"}</span></p>
                        </div>
                        <div className='infos'>
                            <p>Top Level Domain : <span>{tld ? tld[0] : 'no tld'}</span></p>
                            <p>Currencies : <span>{takeCurrencies}</span></p>
                            <p>Languages : <span>{takeLanguages}</span></p>
                        </div>
                    </div>
                    <div className='border-countries'>
                        <p>Border Countries :</p>
                        <div className='borders'>{takeBorders}</div>
                    </div>
                </div>
            </div>
            <img onClick={() => {setModalStatus()}} className='cross' src={cross} alt="" />
        </div>
    </div>
  )
}

export default Modal