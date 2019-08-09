import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Field, getFormValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
// UI
import styles from '../main.module.scss'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from './../../../../reduxForm/components/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

class SignupForm extends Component {
    handleSubmit = (e) => {
        const { formValues } = this.props;

        e.preventDefault()
        console.log('Sign up', formValues)
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <Paper className={styles.paper}>
                    <Box textAlign="center">
                        <Typography variant="h5">
                            Let's get you on board! <span role="img" aria-label="peace sign">✌️</span>
                        </Typography>
                    </Box>
                    <div className={styles.spacing}/>
                    <Field
                        name="email"
                        component={TextField}
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        className={styles.input}
                        margin="dense"
                    />
                    <Field
                        name="password"
                        component={TextField}
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className={styles.input}
                        margin="dense"
                    />
                    <Field
                        name="password_again"
                        component={TextField}
                        id="password_again"
                        label="Password again"
                        type="password"
                        autoComplete="current-password"
                        className={styles.input}
                        margin="dense"
                    />
                    <div className={styles.spacing}/>
                    <Button variant="contained"
                            color="primary"
                            size="large"
                            className={styles.button}
                            type="submit"
                    >
                        Sign up
                    </Button>
                    <div className={styles.spacing}/>
                    <Divider/>
                    <div className={styles.spacing}/>
                    <Box textAlign="center">
                        Already have an account? &nbsp;
                        <Link to="/login" component={RouterLink}>
                            Login now!
                        </Link>
                    </Box>
                </Paper>
            </form>
        )
    }
}

SignupForm.propTypes = {
    formValues: PropTypes.object,
}

const mapStateToProps = (state) => {
    return {
        formValues: getFormValues('signup')(state)
    }
}

const formed = reduxForm({
    // a unique name for the form
    form: 'signup'
})(SignupForm)

export default connect(mapStateToProps)(formed)
