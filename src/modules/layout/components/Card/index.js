import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import Tilt from 'react-tilt'
import styles from './Card.module.scss'

class Card extends Component {
    render () {
        const {img} = this.props

        return (
            <Tilt
                className={styles.card}
                style={{backgroundImage: `url(${img})`}}
            />
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    foil: PropTypes.bool,
}

Card.defaultProps = {
    foil: false,
}

export default Card
