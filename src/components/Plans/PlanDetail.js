import React from 'react';

const PlanDetail = (props) => {
    return (
        <div >
            <p>Id: {props.id}</p>
            <p>Name: {props.name}</p>
        </div>
    );
};

export default PlanDetail;