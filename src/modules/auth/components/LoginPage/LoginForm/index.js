import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
// UI
import styles from '../main.module.scss'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

class LoginForm extends Component {
    render () {
        return (
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
        )
    }
}

LoginForm.propTypes = {}

export default LoginForm
