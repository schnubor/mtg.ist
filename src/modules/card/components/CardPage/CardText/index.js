import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import reactStringReplace from 'react-string-replace'
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

    get oracleTextWithLinebreaks () {
        return reactStringReplace(this.oracleText, '\n', (match, key) => {
            return <React.Fragment key={key}>
                <br/><br/>
            </React.Fragment>
        })
    }

    get oracleTextWithMana () {
        return this.oracleTextWithLinebreaks.map((textPart) => {
            return reactStringReplace(textPart, /\s*({.})\s*/g, (match, index) => {
                let manaCost = match.substring(1, match.length - 1)
                manaCost = isNaN(manaCost) ? manaCost.toLowerCase().replace('/', '') : manaCost

                return <span>&nbsp;<i key={index} className={`ms ms-cost ms-${manaCost}`}/>&nbsp;</span>
            })
        })
    }

    get cardFaces () {
        const {card} = this.props

        return get(card, 'card_faces')
    }

    render () {
        return (
            <React.Fragment>
                <Spacing/>
                <Divider/>
                <Spacing/>
                {this.oracleTextWithMana && <Typography>
                    {this.oracleTextWithMana}
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

CardText
    .propTypes = {card: PropTypes.object.isRequired}

export default CardText
