import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withFirebase } from 'react-redux-firebase'
// UI
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// Icons
import AccountCircle from '@material-ui/icons/AccountCircle'

class UserDropdown extends Component {
    constructor (props) {
        super(props)

        this.state = {
            anchorEl: null,
            open: false
        }
    }

    handleMenuClick = (e) => {
        this.setState({
            open: true,
            anchorEl: e.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null
        })
    }

    handleLogout = () => {
        const {firebase} = this.props
        this.handleClose()

        firebase.logout()
    }

    render () {
        const {anchorEl, open} = this.state

        return (
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenuClick}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

UserDropdown.propTypes = {
    // hoc
    firebase: PropTypes.object.isRequired,
}

export default withFirebase(UserDropdown)
