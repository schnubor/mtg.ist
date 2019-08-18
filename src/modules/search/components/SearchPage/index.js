import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import qs from 'query-string'
import cn from 'classnames'
// UI
import styles from './SearchPage.module.scss'
import Navigation from '../../../navigation/components/Navigation'
import Loading from '../../../layout/components/Loading'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// Actions
import { quickSearch } from '../../actions/quickSearch'
// Selectors
import { getSearchResults, getSearching } from '../../selectors'
import { Link } from 'react-router-dom'
import { routes } from '../../../../routes'
import Card from '../../../card/components/Card'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Spacing from '../../../layout/components/Spacing'

const extractQueryFromLocation = (location) => {
    const parsed = qs.parse(location.search)

    return parsed.q
}

class SearchPage extends Component {
    componentDidMount () {
        const {location, quickSearch} = this.props
        const query = extractQueryFromLocation(location)

        quickSearch(query)
    }

    componentDidUpdate (prevProps) {
        const oldLocation = prevProps.location
        const {location, quickSearch} = this.props

        const oldQuery = extractQueryFromLocation(oldLocation)
        const query = extractQueryFromLocation(location)

        if (query !== oldQuery) quickSearch(query)
    }

    get paperClass () {
        const {results, searching} = this.props

        return cn(styles.paper, {
            [styles.flexed]: searching || results.length === 0
        })
    }

    render () {
        const {results, searching, location} = this.props

        return (
            <Navigation>
                <Paper className={this.paperClass}>
                    <Loading loading={searching}>
                        {results.length > 0 && <React.Fragment>
                            <Typography variant="h5">
                                Found {results.length} cards containing "{extractQueryFromLocation(location)}"
                            </Typography>
                            <Divider/>
                            <Spacing size="lg"/>
                            <Grid container spacing={4}>
                                {results.map((card) => (
                                    <Grid key={card.id} item md={3} sm={6} xs={12}>
                                        <Link to={routes.card.main.replace(':id', card.id)}>
                                            <Card
                                                id={card.id}
                                                tiltOptions={{max: 20, scale: 1.05}}
                                            />
                                        </Link>
                                    </Grid>))
                                }
                            </Grid>
                        </React.Fragment>}
                        {results.length === 0 && <Typography align="center" variant="h5">
                            No results
                        </Typography>}
                    </Loading>
                </Paper>
            </Navigation>
        )
    }
}

SearchPage.propTypes = {
    // via "normal" props
    // via hoc
    location: PropTypes.object.isRequired,
    // via mapStateToProps
    results: PropTypes.array.isRequired,
    // via mapDispatchProps
    quickSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        results: getSearchResults(state),
        searching: getSearching(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        quickSearch: (query) => {
            dispatch(quickSearch(query))
        }
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(SearchPage)

export default connected
