import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
return (
    <div className="Person">
        <p onClick={props.click}> Person Block Person Name : {props.name} and Age : {props.age} !! </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    );
};

export default Radium(person);
