import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
// UI
import Navigation from './../../../navigation/components/Navigation'
import LatestCards from '../LatestCards'

class CatalogPage extends Component {
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
        return (
            <Navigation>
                <LatestCards/>
            </Navigation>
        )
    }
}

CatalogPage.propTypes = {
    // hoc
    firebase: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {}
}

export default compose(withFirebase, connect(mapStateToProps))(CatalogPage)
