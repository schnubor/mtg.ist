import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// UI
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

class DrawerNavigation extends Component {
    render () {
        const {navItems} = this.props

        return (
            <List>
                {navItems.map((item) => (
                    <Link to={item.link} style={{textDecoration: 'none'}}>
                        <ListItem button key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}
                                          primaryTypographyProps={{
                                              variant: 'body1',
                                              color: 'textPrimary',
                                          }}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        )
    }
}

DrawerNavigation.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        link: PropTypes.string.isRequired,
    }))
}

export default DrawerNavigation
