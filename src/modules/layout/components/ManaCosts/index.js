import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ManaCosts extends Component {
    get splittedCosts () {
        const {mana} = this.props
        const regex = /\s*({.})\s*/g

        const costs = mana.split(regex).filter(Boolean)
        return costs
    }

    render () {
        const {shadow, size} = this.props

        return (
            <React.Fragment>
                {this.splittedCosts.map((cost, index) => {
                    let manaCost = cost.substring(1, cost.length - 1)
                    manaCost = isNaN(manaCost) ? manaCost.toLowerCase() : manaCost;

                    return <i key={`${cost}-${index}`} className={`ms ms-cost ms-${manaCost} ${shadow ? 'ms-shadow' : ''} ${size ? (`ms-${size}`) : ''}`}/>
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
