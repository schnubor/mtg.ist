import { limiter } from '../../../utils/scryfallLimiter'
import { Cards } from 'scryfall-sdk'
import SearchActionTypes from '../actionTypes'

export const quickSearch = (query) => {
    return async (dispatch) => {
        dispatch(beginSearch())

        await limiter.schedule(async () => {
            const results = []
            for await (const result of Cards.search(query).all()) {
                results.push(result)
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
