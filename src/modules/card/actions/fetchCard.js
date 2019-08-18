import { Cards } from 'scryfall-sdk'
import CardActionTypes from '../actionTypes'
import { getCardById } from '../selectors'
import { limiter } from '../../../utils/scryfallLimiter'

export const fetchCardById = (id) => {
    return async (dispatch, getState) => {
        const state = getState()
        let card = getCardById(state, id)

        if (!card) {
            card = await limiter.schedule(() => Cards.byId(id))
            return dispatch(storeCard(card))
        }
    }
}

export const storeCard = (card) => {
    return {
        type: CardActionTypes.STORE_CARD,
        payload: {card}
    }
}
