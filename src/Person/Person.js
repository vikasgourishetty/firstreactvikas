import React from 'react';
import Radium, { StyleRoot } from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)' : {
            width : '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> Person Block Person Name : {props.name} and Age : {props.age} !! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
        );
};

export default Radium(person);
