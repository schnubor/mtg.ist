import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import cn from 'classnames'
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
import Legalities from './Legalities'
import Purchase from './Purchase'
// Material
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
// Selectors
import { getCardById } from '../../selectors'

class CardPage extends Component {
    render () {
        const {match, card, auth} = this.props

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
                        {!auth.isEmpty && <div className={styles.addButton}>
                            <Button variant="contained" color="primary" size="large">
                                <AddIcon className={styles.btnIcon}/> Add to Collection
                            </Button>
                        </div>}
                    </Grid>
                    <Grid item md={1} implementation="css" smDown component={Hidden}/>
                    <Grid item md={7} xs={12}>
                        <Paper className={cn(styles.paper, styles.minHeight)}>
                            <Loading loading={isEmpty(card)}>
                                <CardHeader card={card}/>
                                <CardText card={card}/>
                                <FlavorText card={card}/>
                                <PowerText card={card}/>
                            </Loading>
                        </Paper>
                        {!isEmpty(card) && <Purchase card={card}/>}
                        {!isEmpty(card) && <Legalities card={card}/>}
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
    card: PropTypes.object,
    auth: PropTypes.object.isRequired,
    // via mapDispatchProps
}

CardPage.defaultProps = {
    card: {}
}

const mapStateToProps = (state, ownProps) => {
    return {
        card: getCardById(state, ownProps.match.params.id),
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const connected = connect(mapStateToProps, mapDispatchToProps)(CardPage)

export default connected
