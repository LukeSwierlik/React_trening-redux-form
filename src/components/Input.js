import React from 'react';
import TextField from './TextField';
import FormHelperText from './FormHelperText';

const Input = (props) => {
    const {
        type,
        placeholder,
        input,
        meta: {
            touched,
            error,
            warning
        }
    } = props;

    return (
        <div className="input-wrapper">
            <TextField
                {...input}
                value={props.defaultValue}
                placeholder={placeholder}
                type={type}
                onBlur={input.onBlur}
            />

            {touched && error && (
                <FormHelperText error>
                    {error}
                </FormHelperText>
            )}

            {touched && warning && (
                <FormHelperText>
                    {warning}
                </FormHelperText>
            )}
        </div>
    );
};

export default Input;
