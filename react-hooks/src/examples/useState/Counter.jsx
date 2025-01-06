import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('')

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
            setMessage('')
        }
        else if(count <= 0) {
            setCount(0);
            setMessage("Low reached")
        }
    }

    const increment = () => {
        if(count < 20){
            setCount(count + 1);
            setMessage('')
        }
        else if(count >= 20){
            setCount(20);
            setMessage('Max reached')
        }
    }

    return (
        <>
            <h2>Counter Example</h2>
            <button onClick={decrement}>-</button>
            <span>Count {count}</span>
            <button onClick={increment}>+</button>
            {message && <p>{message}</p>}
        </>
    )
}