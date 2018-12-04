import React from 'react';

const FormHelperText = ({children}) => {
    return (
        <div className={'alert alert-danger'}>
            {children}
        </div>
    );
};

export default FormHelperText;
