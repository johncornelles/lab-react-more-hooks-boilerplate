// App.js
import React from 'react';
import Content from './components/Content';
import './App.css'
const initialState = {
  value: '',
  contents: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET':
      return { ...state, value: payload };
    case 'ADD':
      return { contents: [...state.contents, state.value], value: '' };
    default:
      return state;
  }
};

const App = () => {
  const inputRef = React.useRef();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleFocus = () => inputRef.current.focus();

  const handleKeydown = (e) => {
    if (e.key === 'Enter' && state.value.trim() !== '') {
      e.preventDefault();
      dispatch({ type: 'ADD' });
    }
  };

  const handleChange = (e) =>
    dispatch({ type: 'SET', payload: e.target.value });

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value={state.value}
        ref={inputRef}
      />
      {state.contents.map((content, index) => (
        <Content key={index} content={content} />
      ))}
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
};

export default App;