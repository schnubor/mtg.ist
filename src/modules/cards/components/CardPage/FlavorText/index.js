import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
// UI
import styles from './FlavorText.module.scss'
import Typography from '@material-ui/core/Typography'
import Spacing from '../../../../layout/components/Spacing'
import Divider from '@material-ui/core/Divider'

class FlavorText extends Component {
    get flavorText () {
        const {card} = this.props

        return get(card, 'flavor_text', '')
    }

    render () {
        if (!this.flavorText) return null

        return (
            <React.Fragment>
                <Spacing/>
                <Divider/>
                <Spacing/>
                <Typography className={styles.italic}>
                    {this.flavorText.split('\n').map((item, key) => {
                        return <React.Fragment key={key}>{item}<br/></React.Fragment>
                    })}
                </Typography>
            </React.Fragment>
        )
    }
}

FlavorText.propTypes = {card: PropTypes.object.isRequired}

export default FlavorText
