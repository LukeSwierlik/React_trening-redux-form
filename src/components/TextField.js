import React from 'react';

const TextField = (props) => {
    const { type, placeholder, value, name, onBlur } = props;

    return (
        <React.Fragment>
            <label htmlFor="" className="sr-only">{name}</label>

            <input
                type={type}
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
            />
        </React.Fragment>
    );
};

export default TextField;
