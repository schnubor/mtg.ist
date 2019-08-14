import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import cn from 'classnames'
import styles from './Spacing.module.scss'

class Spacing extends Component {
    get spacingClass () {
        const {size} = this.props

        return cn(styles.spacing, styles[size])
    }

    render () {
        return (
            <div className={this.spacingClass}/>
        )
    }
}

Spacing.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

Spacing.defaultProps = {
    size: 'md'
}

export default Spacing
