import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import Spacing from '../../../../layout/components/Spacing'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

class PowerText extends Component {
    render () {
        const {card} = this.props

        return (
            <React.Fragment>
                <Spacing/>
                <Divider/>
                <Spacing/>
                {card.loyalty && <Typography>
                    <strong>Loyalty: {card.loyalty}</strong>
                </Typography>}
                {card.power && card.toughness && <Typography>
                    <strong>{card.power}/{card.toughness}</strong>
                </Typography>}
            </React.Fragment>
        )
    }
}

PowerText.propTypes = {card: PropTypes.object.isRequired}

export default PowerText
