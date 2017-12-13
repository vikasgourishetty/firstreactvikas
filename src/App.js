import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: 'A1', name: 'P1', age: 28},
      {id: 'A2', name: 'P2', age: 29},
      {id: 'A3', name: 'P3', age: 26}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  /*switchNameHandler = (newName) =>{
    console.log("Switch button Clicked");
    this.setState({persons : [
                              {name: newName, age: 28},
                              {name: 'P2', age: 29},
                              {name: 'P3', age: 26}
                             ]
                  });
  } */

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {


    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : { // pseudo selector
                  backgroundColor : 'lightgreen',
                  color: 'black'
                 }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            { this.state.persons.map((person, index) => {
                return <Person 
                          name = {person.name}
                           age = {person.age} 
                           key = {person.id}
                         click = {() => this.deletePersonHandler(index)} 
                        change = {(event) =>this.nameChangeHandler(event, person.id)}
                        />  
              })
            }        
          </div> 
      );

      /* <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,'Person 1')}
                    change={this.nameChangeHandler}> Text Between Opening and closing tag </Person>
            <Person name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/> */

      // Set style dynamically
      style.backgroundColor = 'red';

      // pseudo selector
      style[':hover'] = {
                          backgroundColor : 'salmon',
                          color: 'black'
                        }
    }

    // Set className dynamically
    let classes = []; // ['red', 'bold'].join(' '); // "red bold"

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> My React App</h1>
          <p className={classes.join(' ')}> This is my working React App</p>
          <button style={style} onClick={this.togglePersonsHandler} > Switch/Toggle </button>
          {persons}
        </div>
      </StyleRoot>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'VIKAS REACT APP #1'));
  }
}

export default Radium(App);
