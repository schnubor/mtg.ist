import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import capitalize from 'lodash/capitalize'
// UI
import styles from './Legalities.module.scss'
import Spacing from '../../../../layout/components/Spacing'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class Legalities extends Component {
    renderLegality = (legality) => {
        const {card} = this.props
        const badgeClass = cn(styles.badge, styles[card.legalities[legality]])

        return (
            <Grid item md={3} sm={6} xs={12} key={legality}>
                <div className={badgeClass}>
                    <Typography className={styles.text}>
                        {capitalize(legality)}
                    </Typography>
                </div>
            </Grid>
        )
    }

    render () {
        const {card} = this.props

        return (
            <Paper className={styles.paper}>
                <Typography variant="h5">
                    Legalities
                </Typography>
                <Spacing/>
                <Divider/>
                <Spacing/>
                <Grid container alignItems="center" spacing={2}>
                    {Object.keys(card.legalities).map(this.renderLegality)}
                </Grid>
            </Paper>
        )
    }
}

Legalities.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Legalities
