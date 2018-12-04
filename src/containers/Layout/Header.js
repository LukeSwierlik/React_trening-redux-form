import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import ViewHeader from "../../view/ViewHeader";
import {logoutActions} from "../../reduxUtility/actions/login";

class Header extends PureComponent {
    handlerLogout = () => {
        const { logout, history } = this.props;

        logout(history);
    };

    render() {
        const { user } = this.props;

        return (
            <ViewHeader
                user={user}
                logout={this.handlerLogout}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => dispatch(logoutActions(history))
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
