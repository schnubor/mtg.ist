import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
// UI
import styles from './App.module.scss'
// Auth
import PrivateRoute from './modules/auth/components/PrivateRoute'
// Pages
import LoginPage from './modules/auth/components/LoginPage'

function App () {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <PrivateRoute path={routes.dashboard.home} exact component={() => <div>private</div>}/>
                    <Route path={routes.auth.signup} exact render={(props) => <LoginPage isSignup {...props}/>}/>
                    <Route path={routes.auth.login} exact render={(props) => <LoginPage {...props}/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
