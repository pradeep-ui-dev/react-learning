import React, {useState} from "react";

export default function CounterWithStep(){
    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState(1);

    const count = () => {
        setCounter(counter + Number(step))
    }

    return(
        <div>
            <input type="number"
                value={step}
                onChange={(e) => setStep(e.target.value)}
            />
            <button
                onClick={count}
            >Calculate</button>
            {counter}
        </div>
    )
}