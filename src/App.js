import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes';
// UI
import styles from './App.module.scss';
// Pages
import LoginPage from './modules/auth/components/LoginPage'

function App() {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route path={routes.dashboard.home} exact render={() => <LoginPage />} />
                    <Route path={routes.auth.signup} exact render={() => <LoginPage isSignup />} />
                    <Route path={routes.auth.login} exact render={() => <LoginPage />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
