import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ken', age: 40 },
      { name: 'Ryu', age: 42 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    //do not change state without using setState method or else react can't keep track of it
    //in using setstate, it will only overwrite the part you decleared while leave other part of the state alone

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'ken', age: 40 },
        { name: 'Ryu', age: 42 }
      ]
    })
  }
  
  nameInputSwitch = (event) => {
    //do not change state without using setState method or else react can't keep track of it
    //in using setstate, it will only overwrite the part you decleared while leave other part of the state alone

    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name:  event.target.value, age: 40 },
        { name: 'Ryu', age: 42 }
      ]
    })
  }

  togglePersonsHandler= () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let person = null;

    if (this.state.showPersons) {
      person = (
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              nameSwitch={this.switchNameHandler.bind(this, 'Maximium')}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              nameInputSwitch={this.nameInputSwitch}
              />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        {/*using your decleared style on element example need to be wraped in {} */}
        <button style={buttonStyle} 
                onClick={this.togglePersonsHandler}>toggle persons</button>
        {person}
      </div>
    );
    // without JSX return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ));
  }
}

export default App;
