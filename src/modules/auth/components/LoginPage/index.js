import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import styles from './main.module.scss'
import Card from '../../../layout/components/Card'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

class LoginPage extends Component {
    handleLogin = (values) => {
        console.log('Login', values)
    }

    handleSignup = (values) => {
        console.log('Signup', values)
    }

    render () {
        const {isSignup} = this.props

        return (
            <div className={styles.centerFlex}>
                <Container maxWidth="md">
                    <Grid container spacing={0}>
                        <Hidden smDown>
                            <Grid item xs={12} md={6}>
                                <div className={styles.centerFlex}>
                                    <Card
                                        foil
                                        img="https://i.pinimg.com/originals/15/1d/71/151d71dd0aa6713f98892080d0d00f5d.png"
                                        width={220}
                                        height={305}
                                    />
                                </div>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={6}>
                            <div className={styles.centerFlex}>
                                {isSignup ? <SignupForm onSubmit={this.handleSignup}/> : <LoginForm onSubmit={this.handleLogin}/>}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

LoginPage.propTypes = {
    isSignup: PropTypes.bool,
}

export default LoginPage
