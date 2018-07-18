import React from 'react';

//Rule #1: extend React.Component
class Counter extends React.Component {
    //Rule #4: accept props in the constructor method
   
    //////////////////////////SETUP/////////////////////
    constructor(props){
        super(props);
        // The props being the instructions being passed to the line cook
        //the state is the "line cook's stuff"
        //it is always an object
        this.state = {
            currentValue: props.initialValue
        };

        setInterval(this._increaseValue, 1000);
    }




    //Always write helper functions as arrow functions. Helps keep the bugs away
    _increaseValue = () => {
        //calculate the new currentValue
        let newCurrentValue = this.state.currentValue + 1;

        //then set the new currentValue in state
        //but I must call this.setState I cannot alter this.state directly


        this.setState({
            currentValue: newCurrentValue
        });
    }





    //////////////////////RENDER////////////////////////
    //Rule #2: must have render method
    render(){
        //Rule #3: must return some JSX or a call to React.CreateELement
        return (
            <div className = 'counter'>
            {this.state.currentValue}
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