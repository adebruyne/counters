import React from 'react';
import Counter from './Counter';

const handleClick = () => {
  console.log('click it real good')
}

function convertNumToCounter(value) {
  return (
    <Counter initialValue={value}/>
  )
}

//This is not the react way
let counterValues = [42,14,34,46,4];
let counterElements = counterValues.map(convertNumToCounter);

//This is a shorthand version
//let counterElement = counterValues.map(value => <Counter initialValue={value} />); 


//React Component
const App = () => {
  // React.createElement('h1',null, 'hello');
  return (
    // JSX
    <div className = "container">
  <h1>loe</h1>
    <button onClick={handleClick}>+</button>
    <div className="counter-box">
        {counterElements}   
    </div>

  </div>



)
};


export default App;
