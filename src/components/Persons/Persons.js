import React from 'react';
import Person from './Person/Person.js'

const Persons = (props) => {
    return ( 
        <Person 
                             name={person.name} 
                             age={person.age}
                             click = {()=> this.deletePersonHandler(index)}
                             /* key property help react to keep track of the element rendered 
                             if you don't do it react has to update the whole list instead just the one that needs to be updated
                             usually you have ID which is unique from database and that's the best one to use as key */
                             key={person.id} 
                             //you have access to person.id because it's assigned as the key 
                             changed={(event)=> this.nameInputSwitch(event, person.id)} />
    )
}