import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers(
    {
        // ...your other reducers here
        firebase: firebaseReducer,
        firestore: firestoreReducer,
        form: formReducer,
    }
)

const store = createStore(rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
