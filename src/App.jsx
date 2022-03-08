import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect,useRef } from 'react';
import ReactCounter from "remote/ReactCounter"

import './index.scss';

const App = () => {
  const counterRef = useRef(null)

  useEffect(() => {
    ReactCounter(counterRef.current)
  }, [])
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div ref={counterRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
