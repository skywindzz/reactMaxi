import React from 'react';
import Person from './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.nameSwitch}>I'm {props.name} and I am {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameInputSwitch} value={props.name} />
        </div>    
    )
}

export default person;
