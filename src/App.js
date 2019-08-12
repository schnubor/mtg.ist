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

class App extends React.Component {
    render () {
        const {firebase} = this.props

        return (
            <div className={styles.app}>
                <Loading loading={firebase.isInitializing}>
                    <Router>
                        <Switch>
                            <PrivateRoute path={routes.dashboard.home} exact component={() => <div>private</div>}/>
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

const mapStateToProps = (state) => {
    return {firebase: state.firebase}
}

export default connect(mapStateToProps)(App)
