import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import TextField from '@material-ui/core/TextField'

class ReduxTextField extends Component {
    handleChange = (e) => {
        const {
            input: {onChange}
        } = this.props

        onChange(e)
    }

    render () {
        const {input: {value}} = this.props

        return (
            <TextField
                {...this.props}
                onChange={this.handleChange}
                value={value}
            />
        )
    }
}

ReduxTextField.propTypes = {
    // hoc
    input : PropTypes.object.isRequired,
}

export default ReduxTextField
