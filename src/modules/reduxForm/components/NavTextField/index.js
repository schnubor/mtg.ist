import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import InputBase from '@material-ui/core/InputBase'

class ReduxNavTextField extends Component {
    handleChange = (e) => {
        const {
            input: {onChange}
        } = this.props

        onChange(e)
    }

    render () {
        const {input: {value}} = this.props

        return (
            <InputBase
                {...this.props}
                onChange={this.handleChange}
                value={value}
            />
        )
    }
}

ReduxNavTextField.propTypes = {
    // hoc
    input: PropTypes.object.isRequired,
}

export default ReduxNavTextField
