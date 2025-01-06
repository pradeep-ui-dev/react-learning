import React, {useState} from "react";

export default function CheckPassword(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target
        //console.log(e.target.name)
        if(name === "password"){
            setPassword(value)
        }
        else if(name === "confirmPassword"){
            setConfirmPassword(value)
        }
    }

    const passwordMatch = password && confirmPassword && password === confirmPassword;

    return (
        <>
            <h2>Check Password</h2>
            <form>
                <label>
                    Password: 
                    <input type='text' name='password' value={password} onChange={handleChange} />
                </label>
                <label>
                    Confirm Password: 
                    <input type='text' name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                </label>
                <p>{passwordMatch ? 'Password Match!' : 'Password do not match.'}</p>
            </form>
        </>
    )

}