import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from './userDuck';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    user: userReducer
});

export default function generateStore() {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}