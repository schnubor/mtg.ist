import get from 'lodash/get'
import { CARD_BACK_IMG } from './constants'

export const getCardImage = (card, format = 'normal') => {
    const regular = get(card, `image_uris[${format}]`)
    if (regular) return regular

    return get(card, `card_faces[0].image_uris[${format}]`, CARD_BACK_IMG)
}

export const calcBorderRadius = (width) => {
    const calculated = Math.round((width * 7) / 150)

    return calculated >= 10 ? calculated : 10
}
