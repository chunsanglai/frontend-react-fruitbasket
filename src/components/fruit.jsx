import {React, useState} from "react";

function Fruit(props) {
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    return (

        <div>
            <h1>{props.name}</h1> 
            <button type="button" onClick={decrease}> - </button>
            <span> {count} </span>
            <button type="button" onClick={increase}> + </button>
        </div>
    );
}

export default Fruit;