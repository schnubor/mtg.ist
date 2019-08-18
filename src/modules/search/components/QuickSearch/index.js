import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
// UI
import styles from './QuickSearch.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ReduxNavTextField from '../../../reduxForm/components/NavTextField'
// Actions
import { quickSearch } from '../../actions/quickSearch'
// Selectors

class QuickSearch extends Component {
    handleChange = (e, newValue) => {
        const {quickSearch} = this.props

        if (newValue.length > 3) {
            quickSearch(newValue)
        }
    }

    render () {
        return (
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <SearchIcon/>
                </div>
                <Field
                    name="searchTerm"
                    component={ReduxNavTextField}
                    placeholder="Quicksearch…"
                    classes={{
                        root: styles.inputRoot,
                        input: styles.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                    onChange={this.handleChange}
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
    return {
        quickSearch: (query) => {
            dispatch(quickSearch(query))
        }
    }
}

const formed = reduxForm({
    form: 'quicksearch'
})(QuickSearch)
const connected = connect(mapStateToProps, mapDispatchToProps)(formed)

export default connected
