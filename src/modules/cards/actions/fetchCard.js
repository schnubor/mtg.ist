import { Cards } from 'scryfall-sdk'
import CardActionTypes from '../actionTypes'
import { getCardById } from '../selectors'

export const fetchCardById = (id) => {
    return async (dispatch, getState) => {
        const state = getState()
        let card = getCardById(state, id)

        if (!card) {
            card = await Cards.byId(id)
            dispatch(storeCard(card))
        }

        return card
    }
}

const storeCard = (card) => {
    return {
        type: CardActionTypes.STORE_CARD,
        payload: {card}
    }
}
