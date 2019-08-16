import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
// UI
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Spacing from '../../../../layout/components/Spacing'
import Divider from '@material-ui/core/Divider'

class CardText extends Component {
    get oracleText () {
        const {card} = this.props

        return get(card, 'oracle_text', '')
    }

    get cardFaces () {
        const {card} = this.props

        return get(card, 'card_faces')
    }

    render () {
        const {card} = this.props

        return (
            <React.Fragment>
                <Spacing/>
                <Divider/>
                <Spacing/>
                {this.oracleText && <Typography>
                    {get(card, 'oracle_text', '').split('\n').map((item, key) => {
                        return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>
                    })}
                </Typography>}
                {this.cardFaces && <Grid container spacing={2}>
                    {this.cardFaces.map((face) => {
                        return <Grid item md={6} sm={12} key={face.name}>
                            {get(face, 'oracle_text', '').split('\n').map((item, key) => {
                                return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>
                            })}
                        </Grid>
                    })}
                </Grid>}
            </React.Fragment>
        )
    }
}

CardText.propTypes = {card: PropTypes.object.isRequired}

export default CardText
