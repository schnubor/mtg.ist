import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
// HOC
import { withFirebase } from 'react-redux-firebase'
// UI
import styles from './main.module.scss'
import Card from '../../../layout/components/Card'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Paper from '@material-ui/core/Paper'

class LoginPage extends Component {
    handleLogin = async (values) => {
        const {firebase} = this.props
        const credentials = {
            email: values.email,
            password: values.password,
        }

        try {
            await firebase.login(credentials)
        } catch (err) {
            console.log(err)
        }
    }

    handleSignup = async (values) => {
        const {firebase} = this.props

        const credentials = {
            email: values.email,
            password: values.password,
        }

        const profile = {
            email: values.email,
            // any additional user data here...
        }

        try {
            await firebase.createUser(credentials, profile)
        } catch (err) {
            console.warn(err)
        }
    }

    render () {
        const {isSignup, location, auth} = this.props
        // Redirect to referred location if signed in
        let {from} = location.state || {from: {pathname: '/'}}
        if (!auth.isEmpty) return <Redirect to={from}/>

        return (
            <div className={styles.centerFlex}>
                <Container maxWidth="md">
                    <Grid container spacing={0}>
                        <Hidden smDown>
                            <Grid item xs={12} md={6}>
                                <div className={styles.centerFlex}>
                                    <div className={styles.card}>
                                        <Card
                                            foil
                                            img="https://i.pinimg.com/originals/15/1d/71/151d71dd0aa6713f98892080d0d00f5d.png"
                                            width={220}
                                            height={305}
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={6}>
                            <div className={styles.centerFlex}>
                                <Paper className={styles.paper}>
                                    {!auth.isLoaded && <div className={styles.loading}>
                                        <CircularProgress/>
                                    </div>}
                                    {auth.isLoaded && (isSignup ?
                                        <SignupForm onSubmit={this.handleSignup}/> :
                                        <LoginForm onSubmit={this.handleLogin}/>)
                                    }
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

LoginPage.propTypes = {
    // normal
    isSignup: PropTypes.bool,

    // via hoc
    firebase: PropTypes.object.isRequired,

    // mapStateToProps
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default compose(withFirebase, connect(mapStateToProps))(LoginPage)
