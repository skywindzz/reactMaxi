import React from 'react';
//in using css moduels think of classes as javascript object which gives you
//access to string version of your css style and class.  It will also give each classes
//a unique hash so throughout the application even if you use the same class name else where it's 
//won't confuse about which css classs you are refering to
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>    
    )
}

export default person;
