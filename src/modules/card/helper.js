import get from 'lodash/get'

export const getCardImage = (card, format = 'normal') => {
    return get(card, `image_uris[${format}]`, 'https://musingsofalifelongnerd.files.wordpress.com/2015/01/mtg-card-back.jpg')
}

export const calcBorderRadius = (width) => {
    const calculated = Math.round((width * 7) / 150)

    return calculated >= 10 ? calculated : 10
}
