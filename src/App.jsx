import { useState, Fragment, useEffect } from 'react'
import { APIClient } from './services/APIClient'

// components
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Countries from './components/Countries/Countries'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

function App() {
  const [isSelected, setIsSelected] = useState('All')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [countries , setCountries] = useState([])
  const [pagination , setPagination] = useState(8)
  const [filterCountries , setFilterCountries] = useState([])
  const [inputText, setInputText] = useState('')
  const [modalStatus, setModalStatus] = useState(false)
  const [modalInfos, setModalInfos] = useState(null)


  
  const changeMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  const addCountPagination = () => {
    setPagination(pagination + 8)
  }

  const showAll = () => {
    setPagination(filterCountries.length)
  }

  const showOnly = () => {
    setPagination(8)
  }

  const handleInputText = (e) => {
    filterFlags(e.target.value)
    setInputText(e.target.value)
  }

  const filterFlags = (flagName) => {
    const newFilterFlags = countries.filter((flag) => {
      return flag.name.common.toLowerCase().startsWith(flagName.toLowerCase())
    })
    setFilterCountries(newFilterFlags)
  }
  const takeModalInfos = (countryName) => {
    filterCountries.filter((item) => {
      if (item.name.common === countryName) {
        setModalInfos(item)
      }
    })
    setModalStatus(true)
  }

  const apiClient = new APIClient
  useEffect(() => {
    apiClient.getData(isSelected !== 'All' ? `region/${isSelected.toLowerCase()}` : isSelected.toLowerCase())
    .then((data) => {
      setCountries(data)
      setFilterCountries(data)
    }).catch((err) => {
      console.log(err);
    })
  }, [isSelected])
  

  return (  
    <div className={!isDarkMode ? 'wrapper' : 'wrapper dark-mode'}>
      <Header 
            changeMode={changeMode} 
            isDarkMode={isDarkMode}
      />
      <Form 
            isSelected={isSelected} 
            setIsSelected={setIsSelected}
            handleInputText={handleInputText}
            inputText={inputText}
      />
      <Countries 
                countries={filterCountries} 
                pagination={pagination}
                takeModalInfos={takeModalInfos}
      />
      <Footer 
              filterCountries={filterCountries}
              pagination={pagination} 
              addCountPagination={addCountPagination}
              showAll={showAll}
              showOnly={showOnly}
      />
      { modalStatus ? <Modal setModalStatus={setModalStatus} modalInfos={modalInfos} /> : null }
    </div>
  )
}

export default App


