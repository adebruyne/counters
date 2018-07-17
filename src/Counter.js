import React from 'react';


//React component
const Counter = ({
    finalValue, 
    initialValue}) => {
    // console.log(props)
    return (
        <div className = "counter">
        {initialValue}
        </div>
    );
};

export default Counter;