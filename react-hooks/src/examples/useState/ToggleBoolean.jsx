import { useState } from "react";

export default function ToggleBoolean(){
    const [isOn, setIsOn] = useState(false)

    const handleChange = () => {
        setIsOn(!isOn)
    }

    return (
        <>
            <h2>Toggle Boolean</h2>
            <button onClick={handleChange}>
                {isOn ? "ON" : "OFF"}
            </button>
            <p>The Switch is currently {isOn ? "ON" : "OFF"}</p>
        </>
    )
}