import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
// UI
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class DashboardPage extends Component {
    handleLogoutClick = () => {
        const {firebase} = this.props

        firebase.logout()
    }

    render () {
        const {auth} = this.props

        return (
            <Container>
                <Paper>
                    <Typography>
                        Logged in as {auth.email} <br/><br/>
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        type="button"
                        onClick={this.handleLogoutClick}
                    >
                        Logout
                    </Button>
                </Paper>
            </Container>
        )
    }
}

DashboardPage.propTypes = {
    // hoc
    firebase: PropTypes.object.isRequired,

    // via mapStateToProps
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {auth: state.firebase.auth}
}

export default compose(withFirebase, connect(mapStateToProps))(DashboardPage)
