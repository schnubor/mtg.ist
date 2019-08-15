import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Navs
import generalNav from './generalNavItems'
import catalogNav from './catalogNavItems'
import deckNav from './deckNavItems'
// UI
import cn from 'classnames'
import styles from '../Navigation.module.scss'
import DrawerNavigation from '../DrawerNavigation'
// Material
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'

class Sidebar extends Component {
    render () {
        const {open, onCloseClick} = this.props

        return (
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
                    <IconButton onClick={onCloseClick}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <DrawerNavigation navItems={generalNav}/>
                </List>
                <Divider/>
                <List>
                    <DrawerNavigation navItems={catalogNav}/>
                </List>
                <Divider/>
                <List>
                    <DrawerNavigation navItems={deckNav}/>
                </List>
            </Drawer>
        )
    }
}

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    onCloseClick: PropTypes.func.isRequired,
}

export default Sidebar
