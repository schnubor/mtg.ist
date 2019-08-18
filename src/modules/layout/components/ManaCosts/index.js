import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatManaCosts } from './helper'
// UI
import styles from './ManaCosts.module.scss'
import { Typography } from '@material-ui/core'

class ManaCosts extends Component {
    get splitCards () {
        const {mana} = this.props

        return mana.split(' // ').filter(Boolean)
    }

    get splittedCardCosts () {
        const regex = /\s*({.})\s*/g

        return this.splitCards.map((cardCost) => {
            return cardCost.split(regex).filter(Boolean)
        })
    }

    render () {
        const {shadow, size} = this.props

        return (
            <React.Fragment>
                {this.splittedCardCosts.map((card, cardIndex) => {
                    const manaIcons = card.map((cost, costIndex) => {
                        const manaCost = cost.substring(1, cost.length - 1)
                        const formattedManaCost = formatManaCosts(manaCost)
                        const iconClass = `${styles.mana} ms ms-cost ms-${formattedManaCost} ${shadow ? 'ms-shadow' : ''} ${size ? (`ms-${size}`) : ''}`

                        return <i key={`${cost}-${costIndex}`} className={iconClass}/>
                    })

                    return cardIndex > 0 ? <React.Fragment key={`splitcard-${cardIndex}`}>
                        <Typography variant="h5">
                            {'//'}
                        </Typography> {manaIcons}
                    </React.Fragment> : manaIcons
                })}
            </React.Fragment>
        )
    }
}

ManaCosts.propTypes = {
    mana: PropTypes.string,
    shadow: PropTypes.bool,
    size: PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x', '6x'])
}

ManaCosts.defaultProps = {
    shadow: true,
    size: '1x'
}

export default ManaCosts
