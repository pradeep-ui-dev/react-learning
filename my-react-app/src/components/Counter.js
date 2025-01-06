import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incremental Count {count}</button>
            <button onClick={() => setCount(count - 1)}>Decremental Count {count}</button>
        </div>
    )
}



export default Counter;