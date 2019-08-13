import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
// Navigations
import catalogNav from './catalogNavItems'
import deckNav from './deckNavItems'
// UI
import cn from 'classnames'
import styles from './DashboardPage.module.scss'
import DrawerNavigation from './DrawerNavigation'
import UserDropdown from './UserDropdown'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

class DashboardPage extends Component {
    constructor (props) {
        super(props)

        this.state = {open: false}
    }

    handleDrawerOpen = () => {
        this.setState({open: true})
    }

    handleDrawerClose = () => {
        this.setState({open: false})
    }

    render () {
        const {auth} = this.props
        const {open} = this.state

        return (
            <div className={styles.root}>
                <CssBaseline/>
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
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={cn(styles.menuButton, {
                                [styles.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap className={styles.title}>
                            Dashboard
                        </Typography>
                        <UserDropdown/>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={cn(styles.drawer, {
                        [styles.drawerOpen]: open,
                        [styles.drawerClose]: !open,
                    })}
                    classes={{
                        paper: cn({
                            [styles.drawerOpen]: open,
                            [styles.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={styles.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <DrawerNavigation navItems={catalogNav}/>
                    </List>
                    <Divider/>
                    <List>
                        <DrawerNavigation navItems={deckNav}/>
                    </List>
                </Drawer>
                <main className={styles.content}>
                    <div className={styles.toolbar}/>
                    <Container>
                        <Typography>
                            {`Welcome back ${auth.email}!`}
                        </Typography>
                    </Container>
                </main>
            </div>
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
