import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Form, reduxForm, Field, getFormValues } from 'redux-form'
// UI
import styles from '../main.module.scss'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from './../../../../reduxForm/components/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

class LoginForm extends Component {
    render () {
        const {handleSubmit} = this.props

        return (
            <Form onSubmit={handleSubmit}>
                <Paper className={styles.paper}>
                    <Box textAlign="center">
                        <Typography variant="h5">
                            Welcome back! <span role="img" aria-label="wave">👋</span>
                        </Typography>
                    </Box>
                    <div className={styles.spacing}/>
                    <Field
                        component={TextField}
                        name="email"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        margin="normal"
                        className={styles.input}
                    />
                    <Field
                        component={TextField}
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="dense"
                        className={styles.input}
                    />
                    <div className={styles.spacing}/>
                    <Button variant="contained"
                            color="primary"
                            size="large"
                            className={styles.button}
                            type="submit"
                    >
                        Login
                    </Button>
                    <div className={styles.spacing}/>
                    <Box textAlign="center" fontSize={12}>
                        <Link to="/forgot" component={RouterLink} color="primary">
                            Forgot your username/password?
                        </Link>
                    </Box>
                    <div className={styles.spacing}/>
                    <Divider/>
                    <div className={styles.spacing}/>
                    <Box textAlign="center">
                        Don't have an account yet? &nbsp;
                        <Link to="/signup" component={RouterLink}>
                            Sign up now!
                        </Link>
                    </Box>
                </Paper>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    // hoc
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({form: 'login'})(LoginForm)
