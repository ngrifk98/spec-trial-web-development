import React, { useState } from 'react';
import Child from './Child.jsx';
import Header from './components/Header';
import Form from './components/Form';
import RobotList from './components/RobotList';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className='app'>
      <Header />
      <main>
        <h1>App Component</h1>
        <h3>User Input: {input}</h3>
        <input
          type="text"
          placeholder="Type Something Cool"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Form />
        <RobotList />
        <Child userInput={input} />
      </main>
    </div>
  );
}

export default App;
