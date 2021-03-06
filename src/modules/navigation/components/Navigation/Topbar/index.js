import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { routes } from '../../../../../routes'
// UI
import cn from 'classnames'
import styles from '../Navigation.module.scss'
import UserDropdown from './UserDropdown'
// Material
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import QuickSearch from '../../../../search/components/QuickSearch'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'

class Topbar extends Component {
    handleSearch = (values) => {
        const {history} = this.props

        history.push(`${routes.search.main}?q=${values.query}`)
    }

    render () {
        const {open, onMenuClick, auth} = this.props

        return (
            <AppBar
                position="fixed"
                className={cn(styles.appBar, {
                    [styles.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onMenuClick}
                        edge="start"
                        className={cn(styles.menuButton, {
                            [styles.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <QuickSearch onSubmit={this.handleSearch}/>
                    <div className={styles.grow}/>
                    <Hidden smDown>
                        <Typography className={styles.username}>
                            {auth.email}
                        </Typography>
                    </Hidden>
                    <UserDropdown/>
                </Toolbar>
            </AppBar>
        )
    }
}

Topbar.propTypes = {
    // hoc
    history: PropTypes.object.isRequired,

    // normal
    open: PropTypes.bool.isRequired,
    onMenuClick: PropTypes.func.isRequired,

    // mapStateToProps
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(withRouter(Topbar))
