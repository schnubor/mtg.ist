import React, { Component } from 'react'
import PropTypes from 'prop-types'
// UI
import styles from './Loading.module.scss'
import CircularProgress from '@material-ui/core/CircularProgress'

class Loading extends Component {
    render () {
        const { children, loading } = this.props;

        if  ( loading ) return (
            <div className={styles.loading}>
                <CircularProgress/>
            </div>
        )

        return children;
    }
}

Loading.propTypes = {
    children: PropTypes.any.isRequired,
    loading: PropTypes.bool,
}
Loading.defaultProps = {loading: false}

export default Loading
