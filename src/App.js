import React from 'react';
import Counter from './Counter';

function deleteCounterById(theID) {
  console.log(theID);
}


function convertNumToCounter(obj) {
  return (
    <Counter 
    key={obj.id}
    id={obj.id}
    initialValue={obj.value}
    doClick={deleteCounterById}
    />
  )
}

//This is not the react way
// let counterValues = [42,14,34,46,4];
// let counterElements = counterValues.map(convertNumToCounter);

//This is a shorthand version
//let counterElement = counterValues.map(value => <Counter initialValue={value} />); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValues: [{id: 54321, value: 33}]
    }
  }

   _handleClick = () => {
     let newObj = {
       id: (new Date()).getTime(),
       value:0
     };
    console.log('click it real good');
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    })
  }




  render(){
    return (
      <div className = "container">
      <h1>loe</h1>
        <button onClick={this._handleClick}>+</button>
        <div className="counter-box">
            {this.state.counterValues.map(convertNumToCounter)}   
        </div>
    
      </div> 
    );
  }
}




// App is a React Component
// const App = () => {
//   // React.createElement('h1',null, 'hello');
//   return (
//     // JSX
//     <div className = "container">
//   <h1>loe</h1>
//     <button onClick={handleClick}>+</button>
//     <div className="counter-box">
//         {counterElements}   
//     </div>

//   </div>
// )
// };


export default App;
