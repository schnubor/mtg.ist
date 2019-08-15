import React from 'react'
import { routes } from '../../../../../routes'
// UI
import AddIcon from '@material-ui/icons/Add'
import StyleIcon from '@material-ui/icons/Style'

const deckNav = [
    {
        icon: <StyleIcon/>,
        text: 'Decks',
        link: routes.decks.main
    },
    {
        icon: <AddIcon/>,
        text: 'New Deck',
        link: routes.decks.add
    },
]

export default deckNav
