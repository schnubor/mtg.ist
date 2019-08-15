import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
// UI
import styles from './CardPage.module.scss'
import Card from './../Card'
import Navigation from '../../../navigation/components/Navigation'
import Loading from '../../../layout/components/Loading'
import Spacing from '../../../layout/components/Spacing'
import ManaCosts from '../../../layout/components/ManaCosts'
// Material
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
// Actions
// Selectors
import { getCardById } from '../../selectors'

class CardPage extends Component {
    render () {
        const {match, card} = this.props

        return (
            <Navigation>
                <Spacing size="lg"/>
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <Card
                            id={match.params.id}
                            format="large"
                            tiltOptions={{max: 10, scale: 1.05}}
                        />
                        <Spacing/>
                        <Typography align="center" variant="body2" color="textSecondary">
                            Illustrated by {card.artist}
                        </Typography>
                    </Grid>
                    <Grid item md={1} implementation="css" smDown component={Hidden}/>
                    <Grid item md={7} xs={12}>
                        <Paper className={styles.paper}>
                            <Loading loading={isEmpty(card)}>
                                <div className={styles.title}>
                                    <div className={styles.left}>
                                        <Typography variant="h5">
                                            {card.name}
                                        </Typography>
                                    </div>
                                    <div className={styles.right}>
                                        <ManaCosts size="2x" mana={card.mana_cost}/>
                                    </div>
                                </div>
                                <Spacing/>
                                <Divider/>
                                <Spacing/>
                                <Typography>
                                    {get(card, 'oracle_text', '').split('\n').map((item, key) => {
                                        return <React.Fragment key={key}>{item}<br/><br/></React.Fragment>
                                    })}
                                </Typography>
                                <Spacing/>
                                <Divider/>
                                <Spacing/>
                                {card.loyalty && <Typography>
                                    <strong>Loyalty: {card.loyalty}</strong>
                                </Typography>}
                                {card.power && card.toughness && <Typography>
                                    <strong>{card.power}/{card.toughness}</strong>
                                </Typography>}
                            </Loading>
                        </Paper>
                    </Grid>
                </Grid>
            </Navigation>
        )
    }
}

CardPage.propTypes = {
    // via "normal" props
    // via hoc
    match: PropTypes.object.isRequired,
    // via mapStateToProps
    card: PropTypes.object
    // via mapDispatchProps
}

CardPage.defaultProps = {
    card: {}
}

const mapStateToProps = (state, ownProps) => {
    return {
        card: getCardById(state, ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const connected = connect(mapStateToProps, mapDispatchToProps)(CardPage)

export default connected
