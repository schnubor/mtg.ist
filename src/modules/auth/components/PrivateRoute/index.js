import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
    render () {
        const {component: Component, firebase, ...rest} = this.props

        return (
            <Route
                {...rest}
                render={props =>
                    firebase.auth.isEmpty ? (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {from: props.location}
                            }}
                        />
                    ) : (
                        <Component {...props} />
                    )
                }
            />
        )
    }
}

PrivateRoute.propTypes = {
    // via mapStateToProps
    firebase: PropTypes.object,
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase
    }
}

const connected = connect(mapStateToProps)(PrivateRoute)

export default connected
