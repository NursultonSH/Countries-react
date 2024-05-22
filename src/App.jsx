import { useState, Fragment, useEffect, useContext } from 'react'
import { APIClient } from './services/APIClient'

// components
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Countries from './components/Countries/Countries'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

//context
import { Context } from './context'


function App() {
  const { state, dispatch } = useContext(Context)

  const apiClient = new APIClient
  useEffect(() => {
    apiClient.getData(state.selected !== 'All' ? `region/${state.selected.toLowerCase()}` : state.selected.toLowerCase())
    .then((data) => {
      dispatch({type : "GET_DATA", payload : data})
    }).catch((err) => {
      console.log(err);
    })
  }, [state.selected])
  

  return (  
    <div className={!state.isDarkMode ? 'wrapper' : 'wrapper dark-mode'}>
      <Header />
      <Form />
      <Countries/>
      <Footer />
      { state.modalStatus ? <Modal /> : null }
    </div>
  )
}

export default App


