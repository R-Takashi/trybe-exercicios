import './App.css';
import React from 'react';

const tasks = ['dia 01', 'de', 'frontend']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>
        {tasks.map((task) => Task(task))}
      </ul>
    )
  }
}

export default App;
