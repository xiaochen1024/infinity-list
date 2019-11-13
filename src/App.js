import React from 'react';
import './App.css';
import { SlidingWindowScrollHook } from "./SlidingWindowScrollHook";
import MY_ENDLESS_LIST from './Constants';
function App() {
  return (
    <div className="App">
      <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={200}/>
    </div>
  );
}

export default App;
