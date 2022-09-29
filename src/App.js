import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h3>Task 1:</h3>
        <Task1 />
        <h3>Task 2:</h3>
        <Task2 />
        <h3>Task 3:</h3>
        <Task3 />
      </div>
    );
  }
}

export default App;
