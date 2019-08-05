import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// UI
import styles from './App.module.scss';
// Pages
import LoginPage from './modules/auth/components/LoginPage'

function App () {
    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginPage}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
