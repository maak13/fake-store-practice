import React, { useState } from 'react';

const Test = () => {
    // console.log(count);
    const [count,setCount]=useState(0);
    const plus=()=>{
        setCount(count+1);
    }
    const minus=()=>{
        if(setCount<0){
            setCount(0);
        }
        else{
            setCount(count-1);
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}  className='ms-3 p-2'>+</button>
            <button onClick={minus} className='ms-3 p-2'>-</button>
        </div>
    );
};

export default Test;