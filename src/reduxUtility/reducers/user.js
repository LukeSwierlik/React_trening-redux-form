import { login as actions } from '../actionsType/actionsType';
import {updateObject} from "../../utility/utility";

const INITIAL_STATE = {
    login: '',
    isLogged: false,
    loading: false,
    error: ''
};

const startFetchLogin = (state, action) => {
    const { loading } = action;

    return updateObject(state, {
        loading
    });
};

const fetchLogin = (state, action) => {
    console.log('actions', action);
    const { login, loading, isLogged } = action.payload;

    return updateObject(state, {
        login,
        loading,
        isLogged
    });
};

const errorFetchLogin = (state, action) => {
    const { error, loading } = action.payload;

    return updateObject(state, {
        loading,
        error
    });
};

const logout = (state, action) => {
    const { isLogged } = action;

    return updateObject(state, {
        isLogged
    });
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.START_FETCH_LOGIN]: startFetchLogin,
        [actions.FETCH_LOGIN]: fetchLogin,
        [actions.ERROR_FETCH_LOGIN]: errorFetchLogin,
        [actions.LOGOUT]: logout
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default userReducer;
