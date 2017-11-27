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
    otherState: 'some other state',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
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
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> My React App</h1>
        <button style={style} onClick={this.togglePersonsHandler} > Switch/Toggle </button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'VIKAS REACT APP #1'));
  }
}

export default App;
