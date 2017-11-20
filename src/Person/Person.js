import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick={props.click}> Person Block Person Name : {props.name} and Age : {props.age} !! </p>
        <p>{props.children}</p>
    </div>
    );
};

export default person;