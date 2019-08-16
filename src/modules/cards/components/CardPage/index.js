import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
// UI
import styles from './CardPage.module.scss'
import Card from './../Card'
import Navigation from '../../../navigation/components/Navigation'
import Loading from '../../../layout/components/Loading'
import Spacing from '../../../layout/components/Spacing'
import CardHeader from './CardHeader'
import CardText from './CardText'
import FlavorText from './FlavorText'
import PowerText from './PowerText'
// Material
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
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
                                <CardHeader card={card}/>
                                <CardText card={card}/>
                                <FlavorText card={card}/>
                                <PowerText card={card}/>
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
