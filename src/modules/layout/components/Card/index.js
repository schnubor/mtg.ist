import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import Tilt from 'react-tilt'
import styles from './Card.module.scss'

class Card extends Component {
    constructor (props) {
        super(props)

        this.state = {
            bgPosLeft: 0,
            bgPosRight: 0,
        }

    }

    handleMouseMove = (e) => {
        const {width, height} = this.props
        const left = e.nativeEvent.offsetX
        const top = e.nativeEvent.offsetY
        const leftPos = Math.abs(Math.floor(100 / width * left) - 100)
        const topPos = Math.abs(Math.floor(100 / height * top) - 100)

        this.setState({
            bgPosLeft: leftPos,
            bgPosTop: topPos,
        })
    }

    get cardStyle () {
        const {width, height, img} = this.props

        return {
            backgroundImage: `url(${img})`,
            backgroundPosition: `${this.state.bgPosLeft}% ${this.state.bgPosTop}%`,
            width: `${width}px`,
            height: `${height}px`,
        }
    }

    render () {
        return (
            <Tilt
                className={styles.card}
                style={this.cardStyle}
                onMouseMove={this.handleMouseMove}
            />
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    foil: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
}

Card.defaultProps = {
    foil: false,
    width: 320,
    height: 444,
}

export default Card
