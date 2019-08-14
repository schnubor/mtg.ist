import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
// UI
import Tilt from 'react-tilt'
import styles from './Card.module.scss'

const cardRatio = 0.720720720720721

class Card extends Component {
    constructor (props) {
        super(props)

        this.cardEl = React.createRef()
        this.width = 0
        this.state = {
            bgPosLeft: 0,
            bgPosRight: 0,
        }
    }

    componentDidMount () {
        this.width = this.cardEl.current.offsetWidth
    }

    handleMouseMove = (e) => {
        const left = e.nativeEvent.offsetX
        const top = e.nativeEvent.offsetY
        const leftPos = Math.abs(Math.floor(100 / this.width * left) - 100)
        const topPos = Math.abs(Math.floor(100 / (this.width / cardRatio) * top) - 100)

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
        const {img} = this.props

        return {
            backgroundImage: `url(${img})`,
        }
    }

    get cardClass () {
        const {foil, shadow} = this.props

        return cn(styles.card, {
            [styles.active]: this.state.active,
            [styles.foil]: foil,
            [styles.shadow]: shadow,
        })
    }

    render () {
        const {tiltOptions} = this.props

        return (
            <Tilt
                className={this.cardClass}
                style={this.cardStyle}
                onMouseMove={this.handleMouseMove}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                options={tiltOptions}
            >
                <div className={styles.content} ref={this.cardEl}>
                    <div
                        className={styles.gradient}
                        style={{backgroundPosition: `${this.state.bgPosLeft}% ${this.state.bgPosTop}%`}}
                    />
                    <div className={styles.sparkles}/>
                </div>
            </Tilt>
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    foil: PropTypes.bool,
    shadow: PropTypes.bool,
    tiltOptions: PropTypes.object,
}

Card.defaultProps = {
    foil: false,
    shadow: true,
    tiltOptions: {}
}

export default Card
