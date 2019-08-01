import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// UI
import styles from './App.scss';
// Pages
import RandomCardPage from './modules/randomCard/components/page'

function App () {
    console.log( styles );

    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route path="/" exact component={RandomCardPage}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
