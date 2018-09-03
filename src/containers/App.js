import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'dasfa', name: 'Max', age: 28 },
      { id: 'ardad', name: 'Auron', age: 32 },
      { id: 'rrfad', name: 'Ryu', age: 42 }
    ],
    otherState: 'some other value',
    showPersons: false
  } 
   
  nameInputSwitch = (event, id) => {
  
    //step1. finds the index of the person you are looking for in persons array through matching id 
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    //step2. assign the value of this.state.persons you are finding to person so you aren't changing the state directly
    const person = { 
      ...this.state.persons[personIndex]
    }
    /* 
      alternative
      const person = Object.assign({}, this.state.persons[personIndex])
    */

    //step3. change person's name to the event value
    person.name = event.target.value;

    /*step4. makeing a persons copy*/
    const persons = [...this.state.persons];

    /*step5 assign changed person to the person you need to change */
    persons[personIndex] = person;

    /*step 6 set state and merge the new persons change to orginal*/
    this.setState({ persons: persons })
    /*note all these work are to make sure that we are not altering the oringal state */
  }

  deletePersonHandler = (personIndex) => {
    //prefer way to change data when updating or deleting
    // set the original to a copy then update the copy then set to it to 
    //to orginal in this.state to avoid altering the original state.
    //always update the state in a immutable fashion to avoid react losing track of your state
    //index is not a good way to keep track because if the list changes the index changes and react loses
    //track of where the original index
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler= () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    //if you are going to use psuedo style, inline css, or meda qureies remember you'll need to import radium library
    
    let person = null;
    let btnClass = '';
    if (this.state.showPersons) {
      person = (
          <div>
            {this.state.persons.map((person, index) => {
              //when using ErrorBoundary beware you'll have to put the key element inside the errorboundary component because 
              //it's the outer element which we are mapping from. 
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
            })}
          </div>
      )
      //here is an example of changing background color dynamically using the if statement
      //using psuedo style css with radium note you need to use [] notation insted of . notation since :hover is in string when decleared 
      btnClass = classes.Red;
    }
     
    /*
    to set classes 
    let classes = ['red', 'bold'].join(' '); */

    //setting classes dynamially
    let assignedClasses = [];
     
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }
    
    return (
      <div className={classes.App}>
        {/*here your assign classes to the p element note that the .join to set the classes*/}
        <h1>Hi, I am a react app</h1>
        <p className={assignedClasses.join(' ')}>Testing styles</p>
        {/*using your decleared style on element example need to be wraped in {} */}
        <button className={btnClass}
                onClick={this.togglePersonsHandler}>toggle persons</button>
        {person}
      </div>
    );
    // without JSX return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ));
  }
}

export default App;
