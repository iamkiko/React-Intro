import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 30}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Mandrax', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 69}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am a React app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );  
}
  
export default App;
