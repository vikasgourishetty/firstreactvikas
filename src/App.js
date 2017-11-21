import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'P1', age: 28},
      {name: 'P2', age: 29},
      {name: 'P3', age: 26}
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) =>{
    console.log("Switch button Clicked");
    this.setState({persons : [
                              {name: newName, age: 28},
                              {name: 'P2', age: 29},
                              {name: 'P3', age: 26}
                             ]
                  });
  }

  nameChangeHandler = (event) => {
    this.setState({persons : [
                              {name: 'P1', age: 28},
                              {name: event.target.value, age: 29},
                              {name: 'P3', age: 26}
                            ]
                });
  }

  render() {
    return (
      <div className="App">
        <h1> My first react App</h1>
        <button onClick={this.switchNameHandler.bind(this,'P1')} > Switch </button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} 
                 age={this.state.persons[1].age}
                 click={this.switchNameHandler.bind(this,'Person 1')}
                 change={this.nameChangeHandler}> Text Between Opening and closing tag </Person>
        <Person name={this.state.persons[2].name} 
                 age={this.state.persons[2].age}/>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'VIKAS REACT APP #1'));
  }
}

export default App;
