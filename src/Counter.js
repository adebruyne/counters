import React from 'react';

//Rule #1: extend React.Component
class Counter extends React.Component {
    //Rule #2: must have render method
    render(){
        //Rule #3: must return some JSX or a call to React.CreateELement
        return (
            <div className = 'counter'>
            3
            </div>
        );
    }
}





//React component
// const Counter = ({
//     finalValue, 
//     initialValue}) => {
//     // console.log(props)
//     return (
//         <div className = "counter">
//         {initialValue}
//         </div>
//     );
// };

export default Counter;