import get from 'lodash/get'

export const getCardById = (state, id) => state.cards[id]
export const getCardImagesById = (state, id) => get(state, 'cards[id].image_uris', {})
