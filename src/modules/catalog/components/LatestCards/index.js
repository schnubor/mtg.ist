import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import styles from './LatestCards.module.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Spacing from '../../../layout/components/Spacing'
import Grid from '@material-ui/core/Grid'
import Card from '../../../cards/components/Card'
import Paper from '@material-ui/core/Paper'

class LatestCards extends Component {
    cards = [
        '79883468-a37c-4894-8d05-6a4d150b7d59',
        '354fe9bd-4ec8-409c-8ce5-b29393f3d169',
        '39d51c5e-26cb-4276-a676-fabfef866248',
        'd75ebba8-34ca-47a0-bf13-8318ad73b343'
    ]

    render () {
        return (
            <Paper className={styles.paper}>
                <Typography variant="h5" component="h3">
                    Latest Cards
                </Typography>
                <Divider/>
                <Spacing size="lg"/>
                <Grid container spacing={4}>
                    {this.cards.map((card) => (
                        <Grid key={card}item md={3} sm={6} xs={12}>
                            <Card
                                id={card}
                                tiltOptions={{max: 20, scale: 1.05}}
                            />
                        </Grid>))
                    }
                </Grid>
            </Paper>
        )
    }
}

LatestCards.propTypes = {}

export default LatestCards
