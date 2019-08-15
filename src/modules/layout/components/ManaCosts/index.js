import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
                {this.splittedCardCosts.map((card, index) => {
                    const manaIcons = card.map((cost) => {
                        let manaCost = cost.substring(1, cost.length - 1)
                        manaCost = isNaN(manaCost) ? manaCost.toLowerCase().replace('/', '') : manaCost
                        const iconClass = `${styles.mana} ms ms-cost ms-${manaCost} ${shadow ? 'ms-shadow' : ''} ${size ? (`ms-${size}`) : ''}`

                        return <i key={`${cost}-${index}`} className={iconClass}/>
                    })

                    return index > 0 ? <React.Fragment>
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
