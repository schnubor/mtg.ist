import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
// UI
import styles from './App.module.scss'
import Loading from './modules/layout/components/Loading'
// Auth
import PrivateRoute from './modules/auth/components/PrivateRoute'
// Pages
import LoginPage from './modules/auth/components/LoginPage'
import DashboardPage from './modules/dashboard/components/DashboardPage'
import CatalogPage from './modules/catalog/components/CatalogPage'
import CardPage from './modules/cards/components/CardPage'

class App extends React.Component {
    render () {
        const {isLoaded} = this.props

        return (
            <div className={styles.app}>
                <Loading loading={!isLoaded}>
                    <Router>
                        <Switch>
                            <PrivateRoute path={routes.dashboard.home} exact component={DashboardPage}/>
                            <PrivateRoute path={routes.catalog.main} component={CatalogPage}/>
                            <Route path={routes.card.main} component={CardPage}/>
                            <Route path={routes.auth.signup} exact
                                   render={(props) => <LoginPage isSignup {...props}/>}/>
                            <Route path={routes.auth.login} exact render={(props) => <LoginPage {...props}/>}/>
                        </Switch>
                    </Router>
                </Loading>
            </div>
        )
    }
}

App.defaultProps = {
    isLoaded: false
}

const mapStateToProps = (state) => {
    return {
        isLoaded: state.firebase.auth.isLoaded
    }
}

export default connect(mapStateToProps)(App)
