import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { registerReducer } from '../reducers/registerReducer';
import { loadingReducer } from '../reducers/loadingReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    register: registerReducer,
    loading: loadingReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
        )
    );