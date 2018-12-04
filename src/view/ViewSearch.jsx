import React from 'react';

const ViewSearch = ({ onChange }) => {
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Seerch"
                onChange={onChange}
            />
        </div>
    );
};

export default ViewSearch;
