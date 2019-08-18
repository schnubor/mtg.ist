import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
// UI
import styles from './QuickSearch.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ReduxNavTextField from '../../../reduxForm/components/NavTextField'

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
                        name="query"
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
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const formed = reduxForm({
    form: 'quicksearch'
})(QuickSearch)
const connected = connect(mapStateToProps, mapDispatchToProps)(formed)

export default connected
