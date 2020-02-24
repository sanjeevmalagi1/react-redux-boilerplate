import React, { useState } from "react";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

import './Form.css';

const Form = props => {
  const {
    todos,
    addTodo,
  } = props;
  const [ todo, setTodo ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input type='submit' value='Add Todo' />
      </form>
      <ul className='todos-list'>
        { todos.map(todo => <li key={todo.id}>{todo.text}</li>) }
      </ul>
    </>
  );
}

const mapStateToProps = state => {
  return ({
    todos: state.example,
  });
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);