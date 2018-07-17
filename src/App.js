import React from 'react';
import Counter from './Counter';



//React Component
const App = () => {
  // React.createElement('h1',null, 'hello');
  return (
    // JSX
    <div className = "container">
  <h1>loe</h1>
    <button>+</button>
    <div className="counter-box">
       <Counter  
       finalValue= "100" 
       initialValue="42" 
       />
       <Counter  
       finalValue= "100" 
       initialValue="14"
       />
       <Counter  
       finalValue= "100" 
       initialValue="34"
       />
       <Counter  
       finalValue= "100" 
       initialValue="46"
       />
       <Counter  
       finalValue= "100" 
       initialValue="4"
       />
    </div>

  </div>



)
};


export default App;
