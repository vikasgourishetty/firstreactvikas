import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> VIKAS APP #1</h1>
        <p> My first react app </p>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'VIKAS REACT APP #1'));

  }
}

export default App;
