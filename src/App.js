import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import {Route, Switch, withRouter } from "react-router-dom";
import routes from "./routes/routes";
import Layout from "./containers/Layout/Layout";
import {checkLoginAction} from "./reduxUtility/actions/login";

class App extends Component {
    componentDidMount() {
        const { checkLogin, user } = this.props;

        if(!user.isLogged) {
            checkLogin();
        }
    }

    render() {
        return (
            <Layout>
                <Switch>
                    {routes.map((route) => (
                        <Route path={route.path} component={route.component} exact={route.exact} key={route.id} />
                    ))}
                </Switch>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: () => dispatch(checkLoginAction())
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
