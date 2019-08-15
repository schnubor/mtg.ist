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
import Card from '../../../cards/components/Card'
import Spacing from '../../../layout/components/Spacing'
// Material
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
                        <Typography className={styles.username}>
                            {auth.email}
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
                        <Paper className={styles.paper}>
                            <Typography variant="h5" component="h3">
                                Latest Cards
                            </Typography>
                            <Divider/>
                            <Spacing size="lg"/>
                            <Grid container spacing={4}>
                                <Grid item md={3} sm={6} xs={12} className={styles.card}>
                                    <Card
                                        id="79883468-a37c-4894-8d05-6a4d150b7d59"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} className={styles.card}>
                                    <Card
                                        id="354fe9bd-4ec8-409c-8ce5-b29393f3d169"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} className={styles.card}>
                                    <Card
                                        foil
                                        id="39d51c5e-26cb-4276-a676-fabfef866248"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} className={styles.card}>
                                    <Card
                                        id="d75ebba8-34ca-47a0-bf13-8318ad73b343"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
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
