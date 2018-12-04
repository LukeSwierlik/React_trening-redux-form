import React, {Component} from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ViewLogin from "../view/ViewLogin";
import {fetchLoginActions} from "../reduxUtility/actions/login";

class Login extends Component {
    handlerSubmit = (event) => {
        event.preventDefault();

        const { fetchLogin, loginForm, history } = this.props;
        const { login, password } = loginForm.values;

        console.log('login', loginForm.values);

        if(login && password) {
            fetchLogin(login, password, history);
        }
    };

    render() {
        return (
            <ViewLogin onSubmit={this.handlerSubmit}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.form.loginForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (login, password, history) => dispatch(fetchLoginActions(login, password, history))
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
