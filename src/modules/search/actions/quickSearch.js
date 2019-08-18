import { limiter } from '../../../utils/scryfallLimiter'
import { Cards } from 'scryfall-sdk'
import SearchActionTypes from '../actionTypes'
import { storeCard } from '../../card/actions/fetchCard'

export const quickSearch = (query) => {
    return async (dispatch) => {
        dispatch(beginSearch())

        await limiter.schedule(async () => {
            let results = []
            try {
                results = await Cards.search(query).waitForAll()
                results.forEach((card) => {
                    dispatch(storeCard(card))
                })
            } catch (err) {
                console.warn(err)
            }

            dispatch(finishSearch(results))
        })
    }
}

export const clearSearch = () => {
    return {
        type: SearchActionTypes.SEARCH_CLEAR
    }
}

const beginSearch = () => {
    return {
        type: SearchActionTypes.BEGIN_SEARCH
    }
}

const finishSearch = (results) => {
    return {
        type: SearchActionTypes.SEARCH_FINISHED,
        payload: {results}
    }
}
