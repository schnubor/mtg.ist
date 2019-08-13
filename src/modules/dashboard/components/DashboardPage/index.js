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
import Card from '../../../layout/components/Card'

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
                            <Grid container>
                                <Grid item md={3} xs={6} className={styles.card}>
                                    <Card
                                        size="md"
                                        img="https://i.pinimg.com/originals/15/1d/71/151d71dd0aa6713f98892080d0d00f5d.png"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} xs={6} className={styles.card}>
                                    <Card
                                        size="md"
                                        img="https://img.scryfall.com/cards/large/front/3/5/354fe9bd-4ec8-409c-8ce5-b29393f3d169.jpg"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} xs={6} className={styles.card}>
                                    <Card
                                        size="md"
                                        img="https://img.scryfall.com/cards/large/front/4/c/4c565076-5db2-47ea-8ee0-4a4fd7bb353d.jpg"
                                        tiltOptions={{max: 20, scale: 1.05}}
                                    />
                                </Grid>
                                <Grid item md={3} xs={6} className={styles.card}>
                                    <Card
                                        size="md"
                                        img="https://img.scryfall.com/cards/large/front/d/7/d75ebba8-34ca-47a0-bf13-8318ad73b343.jpg"
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
