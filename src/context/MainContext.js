import React, { createContext, useReducer, useEffect } from 'react'

//# context
export const MainContext = createContext()
export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

// action types
export const AUTH_TYPES = {
	
}

// initial state
export const defaultState = {
    selectedFilter: '',
    favoritedPosts: []
}

const reducer = ( state = defaultState, action ) => {

    switch (action.type) {
		case AUTH_TYPES.LOGIN_OK:
            return {
				...state,
				auth: action.payload
			}
        default:
            return state
        }
}

const initStateFromLocalStorage = () => {
    const selectedFilter = localStorage.getItem("selectedFilter") ? 
				JSON.parse(localStorage.getItem("selectedFilter"))
				: defaultState.selectedFilter

	const favoritedPosts = localStorage.getItem("favoritedPosts") ? 
				JSON.parse(localStorage.getItem("favoritedPosts"))
				: defaultState.favoritedPosts
	return {
		...defaultState,
		selectedFilter,
		favoritedPosts
	}
}

export const MainContextProvider = props => {

	const initialState = initStateFromLocalStorage()

	const [ globalState, globalDispatch ] = useReducer(reducer, initialState)

	useEffect(() => {
		localStorage.setItem('selectedFilter', JSON.stringify(globalState.selectedFilter))
    }, [globalState.selectedFilter])

	useEffect(() => {
		localStorage.setItem('favoritedPosts', JSON.stringify(globalState.favoritedPosts))
    }, [globalState.favoritedPosts])

    return (
        <MainProvider value={{ globalState, globalDispatch }}>
            {props.children}
        </MainProvider>
    )
}

export default MainContextProvider