import { combineReducers, applyMiddleware } from 'redux';
import { createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as formReduder } from 'redux-form';
import charactersReducer from '../reducers/characters';
import userReducer from "../reducers/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeReducers = combineReducers({
    form: formReduder,
    characters: charactersReducer,
    user: userReducer
});

const store = createStore(
    storeReducers,
    composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
