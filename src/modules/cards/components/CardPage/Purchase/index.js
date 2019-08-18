import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import styles from './Purchase.module.scss'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Paper from '@material-ui/core/Paper'

class Purchase extends Component {
    get purchaseBtns () {
        const {card} = this.props

        return [
            {
                name: 'TCGplayer',
                link: card.purchase_uris.tcgplayer
            },
            {
                name: 'Cardmarket',
                link: card.purchase_uris.magiccardmarket
            },
            {
                name: 'Cardhoarder',
                link: card.purchase_uris.cardhoarder
            }
        ]
    }

    renderPurchaseBtn = (button) => {
        return (
            <Grid item md={3} sm={6} xs={12} key={button.name}>
                <a href={button.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={styles.link}
                >
                    <Button variant="contained" color="primary" className={styles.buyButton}>
                        <ShoppingCartIcon className={styles.btnIcon}/> {button.name}
                    </Button>
                </a>
            </Grid>
        )
    }

    render () {
        const {card} = this.props

        return (
            <Paper className={styles.paper}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item md={3} sm={6} xs={12}>
                        <Typography variant="h5" align="center">
                            {card.prices.eur}€
                        </Typography>
                    </Grid>
                    {this.purchaseBtns.map(this.renderPurchaseBtn)}
                </Grid>
            </Paper>
        )
    }
}

Purchase.propTypes = {
    card: PropTypes.object.isRequired,
}

export default Purchase
