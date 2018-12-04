import firebaseApp from '../../firebase/init';
import { login as actions } from "../actionsType/actionsType";

const startFetchLogin = () => {
    return {
        type: actions.START_FETCH_LOGIN,
        loading: true
    };
};

const fetchLogin = (login) => {
    return {
        type: actions.FETCH_LOGIN,
        payload: {
            login,
            loading: false,
            isLogged: true
        }
    }
};

const errorLogin = (error) => {
    return {
        type: actions.ERROR_FETCH_LOGIN,
        payload: {
            error,
            loading: false,
        }
    }
};

const logout = () => {
    return {
        type: actions.LOGOUT,
        isLogged: false
    };
};

export const fetchLoginActions = (login, password, history) => (dispatch) => {
    dispatch(startFetchLogin());

    const ref = firebaseApp
        .collection('users')
        .get();

    ref
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const loginFB = doc.data().login;
                const passwordFB = doc.data().password;

                if(loginFB === login && password === passwordFB) {
                    dispatch(fetchLogin(loginFB));

                    sessionStorage.setItem('login', loginFB);
                    history.push('/');
                }
            })
        })
        .catch((error) => {
           dispatch(errorLogin(error));
        });
};

export const logoutActions = (history) => (dispatch) => {
    sessionStorage.removeItem('login');

    dispatch(logout());

    history.push('/');
};

export const checkLoginAction = () => (dispatch) => {

    const login = sessionStorage.getItem('login');

    if(login) {
        dispatch(fetchLogin(login));
    }
};
