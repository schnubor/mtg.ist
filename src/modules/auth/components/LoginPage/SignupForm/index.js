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

class SignupForm extends Component {
    render() {
        return (
            <Paper className={styles.paper}>
                <Box textAlign="center">
                    <Typography variant="h5">
                        Let's get you on board! ✌️
                    </Typography>
                </Box>
                <div className={styles.spacing} />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className={styles.input}
                    margin="dense"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    className={styles.input}
                    margin="dense"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password again"
                    type="password"
                    autoComplete="current-password"
                    className={styles.input}
                    margin="dense"
                />
                <div className={styles.spacing} />
                <Button variant="contained"
                    color="primary"
                    size="large"
                    className={styles.button}
                >
                    Sign up
                </Button>
                <div className={styles.spacing} />
                <Divider />
                <div className={styles.spacing} />
                <Box textAlign="center">
                    Already have an account? &nbsp;
                    <Link to="/login" component={RouterLink}>
                        Login now!
                    </Link>
                </Box>
            </Paper>
        )
    }
}

SignupForm.propTypes = {}

export default SignupForm
