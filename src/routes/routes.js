import ListCharacters from "../containers/ListCharacters";
import Login from "../containers/Login";
import Register from "../containers/Register";

const routes = [
    {
        id: 1,
        path: '/',
        component: ListCharacters,
        exact: true
    },
    {
        id: 2,
        path: '/login',
        component: Login
    },
    {
        id: 3,
        path: '/register',
        component: Register
    }
];

export default routes;
