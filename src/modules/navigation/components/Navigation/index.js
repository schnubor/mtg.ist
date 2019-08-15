import React, { Component } from 'react'
// UI
import styles from './Navigation.module.scss'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

class Navigation extends Component {
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
        const {children} = this.props
        const {open} = this.state

        return (
            <div className={styles.root}>
                <CssBaseline/>
                <Topbar open={open} onMenuClick={this.handleDrawerOpen}/>
                <Sidebar open={open} onCloseClick={this.handleDrawerClose}/>
                <main className={styles.content}>
                    <div className={styles.toolbar}/>
                    <Container>
                        {children}
                    </Container>
                </main>
            </div>
        )
    }
}

Navigation.propTypes = {}

export default Navigation
