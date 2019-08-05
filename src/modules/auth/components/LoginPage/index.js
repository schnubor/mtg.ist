import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
// UI
import styles from './main.module.scss'
import Card from '../../../layout/components/Card'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'

class LoginPage extends Component {
    render () {
        return (
            <div className={styles.centerFlex}>
                <Container maxWidth="md">
                    <Grid container spacing={0}>
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
                        <Grid item xs={12} md={6}>
                            <div className={styles.centerFlex}>
                                <Paper className={styles.paper}>
                                    <Box textAlign="center">
                                        <Typography variant="h5">
                                            Welcome back! 👋
                                        </Typography>
                                    </Box>
                                    <TextField
                                        id="outlined-email-input"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        className={styles.input}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        className={styles.input}
                                    />
                                    <div className={styles.spacing}/>
                                    <Button variant="contained"
                                            color="primary"
                                            size="large"
                                            className={styles.button}
                                    >
                                        Login
                                    </Button>
                                    <div className={styles.spacing}/>
                                    <Box textAlign="center">
                                        <Link to="/forgot" component={RouterLink}>
                                            Forgot your username/password?
                                        </Link>
                                    </Box>
                                    <div className={styles.spacing}/>
                                    <Divider/>
                                    <div className={styles.spacing}/>
                                    <Box textAlign="center">
                                        Don't have an account yet? &nbsp;
                                        <Link to="/forgot" component={RouterLink}>
                                            Sign up now!
                                        </Link>
                                    </Box>
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

LoginPage.propTypes = {}

export default LoginPage
