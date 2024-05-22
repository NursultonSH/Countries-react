import { createContext, useReducer } from "react"


const initialValue = {
    countries : [],
    filterCountries : [],
    pagination: 8,
    isDarkMode: false,
    selected : 'All',
    modalStatus : false,
    modalInfos : null
}

const reducer = (state = initialValue, action) => {
    const {type, payload} = action
    switch (type) {
        case "GET_DATA" :
            return {...state, countries : payload, filterCountries : payload}
        case "FILTER_FLAGS":
            const newFilterFlags = state.countries.filter(flag => flag.name.common.toLowerCase().startsWith(payload.toLowerCase()))
            return {...state, filterCountries : newFilterFlags}
        case "ADD_COUNT_PAGINATION":
            return {...state, pagination : state.pagination + 8 }
        case "SHOW_ALL":
            return {...state, pagination : state.filterCountries.length}
        case "SHOW_ONLY":
            return {...state, pagination : 8}
        case "CHANGE_MODE":
            return {...state, isDarkMode : !state.isDarkMode}
        case "CHANGE_SELECT_STATUS":
            return {...state, selected : payload}
        case "CHANGE_MODAL_STATUS":
            return {...state, modalStatus : !state.modalStatus}
        case "TAKE_MODAL_INFOS":
            const modalInfos = state.filterCountries.filter(item => item.name.common === payload)
            return {...state, modalInfos : modalInfos[0], }
        default:
            return {state}
    }
}

export const Context = createContext()

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export default Provider