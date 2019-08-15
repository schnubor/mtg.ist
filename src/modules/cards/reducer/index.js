import CardActionTypes from '../actionTypes'

const initialState = {}

export default (state = initialState, action) => {
    const {type} = action

    switch (type) {
        case CardActionTypes.STORE_CARD:
            return {
                ...state,
                [action.payload.card.id]: {
                    ...action.payload.card
                }
            }
        default:
            return state
    }
}
