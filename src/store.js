import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
// Modules
import * as cardConstants from './modules/card/constants'
import * as searchConstants from './modules/search/constants'
// Reducers
import cardReducer from './modules/card/reducer'
import searchReducer from './modules/search/reducer'

// Enhance with dev tools
let composeEnhancers = composeWithDevTools({
    trace: true,
})

if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose
}

// Apply middlewares
const middlewares = []
middlewares.push(thunkMiddleware)

const rootReducer = combineReducers(
    {
        // ...your other reducers here
        [cardConstants.NAME]: cardReducer,
        [searchConstants.NAME]: searchReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer,
        form: formReducer,
    }
)

const store = createStore(
    rootReducer,
    /* preloadedState, */
    composeEnhancers(applyMiddleware(...middlewares))
)

export default store
