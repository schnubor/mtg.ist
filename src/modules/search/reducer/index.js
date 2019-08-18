import SearchActionTypes from '../actionTypes'

const initialState = {
    searching: false,
    results: []
}

export default (state = initialState, action) => {
    const {type} = action

    switch (type) {
        case SearchActionTypes.BEGIN_SEARCH:
            return {
                ...state,
                searching: true,
            }
        case SearchActionTypes.SEARCH_FINISHED:
            return {
                searching: false,
                results: action.payload.results
            }
        case SearchActionTypes.SEARCH_CLEAR:
            return initialState
        default:
            return state
    }
}
