import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from "../components/Input";

const required = value => value ? undefined : 'Required';
const minValue = min => value =>  value && value.length < min ? `Must be at least ${min}` : undefined;

const minValue3 = minValue(3);

const ViewLogin = ({ onSubmit }) => {
    return (
        <div className={'text-center'}>
            <form className="form-signin" onSubmit={onSubmit}>
                <img className="mb-4" src="" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                    <Field component={Input}
                           type={'text'}
                           name={'login'}
                           placeholder={'Login'}
                           validate={[required, minValue3]}
                    />

                    <Field component={Input}
                           type={'password'}
                           name={'password'}
                           placeholder={'Password'}
                           validate={[required, minValue3]}
                    />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'loginForm'
})(ViewLogin);
