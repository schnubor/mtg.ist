import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
// UI
import Tilt from 'react-tilt'
import styles from './Card.module.scss'

const cardRatio = 0.720720720720721
const sizeMap = {
    lg: 320,
    md: 220,
    sm: 150
}

class Card extends Component {
    constructor (props) {
        super(props)

        this.state = {
            bgPosLeft: 0,
            bgPosRight: 0,
        }
    }

    handleMouseMove = (e) => {
        const {size} = this.props
        const left = e.nativeEvent.offsetX
        const top = e.nativeEvent.offsetY
        const leftPos = Math.abs(Math.floor(100 / sizeMap[size] * left) - 100)
        const topPos = Math.abs(Math.floor(100 / (sizeMap[size] / cardRatio) * top) - 100)

        this.setState({
            bgPosLeft: leftPos,
            bgPosTop: topPos,
        })
    }

    handleMouseEnter = () => {
        this.setState({active: true})
    }

    handleMouseLeave = () => {
        this.setState({active: false})
    }

    get cardStyle () {
        const {size, img} = this.props

        return {
            backgroundImage: `url(${img})`,
            width: `${sizeMap[size]}px`,
            height: `${sizeMap[size] / cardRatio}px`,
        }
    }

    get cardClass () {
        const {foil, size, shadow} = this.props

        return cn(styles.card, styles[size], {
            [styles.active]: this.state.active,
            [styles.foil]: foil,
            [styles.shadow]: shadow,
        })
    }

    render () {
        const {tiltOptions} = this.props

        return (
            <React.Fragment>
                <Tilt
                    className={this.cardClass}
                    style={this.cardStyle}
                    onMouseMove={this.handleMouseMove}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    options={tiltOptions}
                >
                    <div
                        className={styles.gradient}
                        style={{backgroundPosition: `${this.state.bgPosLeft}% ${this.state.bgPosTop}%`}}
                    />
                    <div className={styles.sparkles}/>
                </Tilt>
            </React.Fragment>
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    foil: PropTypes.bool,
    shadow: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    tiltOptions: PropTypes.object,
}

Card.defaultProps = {
    foil: false,
    shadow: false,
    size: 'lg',
    tiltOptions: {}
}

export default Card
