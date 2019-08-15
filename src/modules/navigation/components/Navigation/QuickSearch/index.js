import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// UI
import styles from './QuickSearch.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';
// Actions
// Selectors

class QuickSearch extends Component {
    render () {
        return (
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: styles.inputRoot,
                        input: styles.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                />
            </div>
        )
    }
}

QuickSearch.propTypes = {
    // via "normal" props
    // via hoc
    // via mapStateToProps
    // via mapDispatchProps
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const connected = connect(mapStateToProps, mapDispatchToProps)(QuickSearch)

export default connected
