import React, { createContext, useReducer, useEffect } from 'react'

//# context
export const MainContext = createContext()
export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

// action types
export const ACTIONS = {
	FAVORITES_ADD: 'FAVORITES/ADD',
	FAVORITES_REMOVE: 'FAVORITES/REMOVE',
	FILTER_UPDATE: 'FILTER/UPDATE',
}

// initial state
export const defaultState = {
    selectedFilter: '',
    favoritedPosts: []
}

const reducer = ( state = defaultState, action ) => {

    switch (action.type) {
		case ACTIONS.FILTER_UPDATE:
            return {
				...state,
				selectedFilter: action.payload
			}
		case ACTIONS.FAVORITES_ADD:
            return {
				...state,
				favoritedPosts: [...state.favoritedPosts, action.payload]
			}
		case ACTIONS.FAVORITES_REMOVE:
			return {
				...state,
				favoritedPosts: state.favoritedPosts.filter(item => item.objectID !== action.payload.objectID)
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