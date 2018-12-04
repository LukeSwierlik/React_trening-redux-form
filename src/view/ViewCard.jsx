import React from 'react';

const ViewCard = ({ character }) => {
    const { name, image } = character;

    return (
        <div className={'col-md-4'}>
            <div className="card mb-4 shadow-sm">
                <img className="card-img-top" src={image} alt={name} />

                <div className="card-body">
                    <p className="card-text">{name}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;
