import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
// UI
import styles from './QuickSearch.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ReduxNavTextField from '../../../reduxForm/components/NavTextField'
// Actions
import { clearSearch, quickSearch } from '../../actions/quickSearch'
// Selectors
import { getSearchResults } from '../../selectors'

class QuickSearch extends Component {
    handleKeyDown = (e) => {
        const {handleSubmit} = this.props

        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault()
            e.stopPropagation()
            handleSubmit()
        }
    }

    render () {
        return (
            <form onKeyDown={this.handleKeyDown}>
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
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

QuickSearch.propTypes = {
    // via "normal" props
    // via hoc
    handleSubmit: PropTypes.func.isRequired,
    // via mapStateToProps
    results: PropTypes.array.isRequired,
    // via mapDispatchProps
    quickSearch: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        results: getSearchResults(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        quickSearch: (query) => {
            dispatch(quickSearch(query))
        },
        clearSearch: () => {
            dispatch(clearSearch())
        }
    }
}

const formed = reduxForm({
    form: 'quicksearch'
})(QuickSearch)
const connected = connect(mapStateToProps, mapDispatchToProps)(formed)

export default connected
