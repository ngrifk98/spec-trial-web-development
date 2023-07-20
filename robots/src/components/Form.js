import React from 'react';

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Make sure to prevent the default form behavior
    props.handleRobotAdd(event); // Pass the event object to the handleRobotAdd function
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>What is your new robot's name?</p>
      <input
        type='text'
        placeholder='name'
        value={props.input}
        onChange={props.handleInput}
      />
      <button>Create Robot</button>
    </form>
  );
};

export default Form;
