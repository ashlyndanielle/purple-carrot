import React from 'react';

const RecipesDetails = (props) => {
    return (
        <div >
            <p>Id: {props.id}</p>
            <p>Name: {props.name}</p>
        </div>
    );
};

export default RecipesDetails;