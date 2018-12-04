import React from 'react';
import { Link } from 'react-router-dom';

const ViewHeader = (props) => {
    const { user, logout } = props;

    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">
                    <Link to={'/'}>Company name</Link>
                </h5>


                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="/">Features</a>
                    <a className="p-2 text-dark" href="/">Enterprise</a>
                    <a className="p-2 text-dark" href="/">Support</a>
                    <a className="p-2 text-dark" href="/">Pricing</a>
                </nav>

                {user.isLogged ? (
                    <button className="btn btn-outline-primary" onClick={logout}>Logout</button>
                    ): (
                    <React.Fragment>
                        <Link className="btn btn-primary mr-2" to={'/login'}>Sign in</Link>
                        <Link className="btn btn-outline-primary" to={'/register'}>Sign up</Link>
                    </React.Fragment>
                )}
            </div>
        </header>
    );
};

export default ViewHeader;
