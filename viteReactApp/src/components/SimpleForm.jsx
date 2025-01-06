import React, {useState} from 'react';

function SimpleForm(){
    //Password Checker
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState ('');
    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     console.log(name)
    //     if(name === 'password'){
    //         setPassword(value)
    //     }
    //     else if(name === 'confirmPassword'){
    //         setConfirmPassword(value)
    //     }
    // }
    // const passwordMatch = password && confirmPassword && password === confirmPassword;

    // return(
    //     <form>
    //         <label>
    //             Password: 
    //             <input type='text' name='password' value={password} onChange={handleChange} />
    //         </label>
    //         <label>
    //             Confirm Password: 
    //             <input type='text' name='confirmPassword' value={confirmPassword} onChange={handleChange} />
    //         </label>
    //         <p>{passwordMatch ? 'Password Match!' : 'Password do not match.'}</p>
    //     </form>
    // )


    //Checkbox and Submit Button
    // const [checked, setChecked] = useState(false);
    // const handleChange = (e) => {
    //     setChecked(e.target.checked);
    // }
    // return (
    //     <form>
    //         <label>
    //             <input type='checkbox' onChange={handleChange} />
    //             Terms and Conditions
    //         </label>
    //         <button type='submit' disabled={!checked}>Submit</button>
    //     </form>
    // )

    //Multi-Input Form: Create a form component with inputs for name, age, and email. When the user submits, display the form data below the form (instead of sending it anywhere).
    /*const [formData, setFormDate] = useState({
        name: '',
        age: '',
        email: ''
    })
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState('')
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormDate((prevData) => ({
            ...prevData,
            [name]: value
        }))
        //console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age || !formData.email) {
            setError('Please fill out all fields before submitting.');
            setSubmittedData('');
            return;
        }
        
        setSubmittedData(formData);
        setError('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type='text' value={formData.name} name='name' onChange={handleChange} />
            </label>
            <label>
                Age: 
                <input type='text' value={formData.age} name='age' onChange={handleChange} />
            </label>
            <label>
                Email: 
                <input type='text' value={formData.email} name='email' onChange={handleChange} />
            </label>
            <button type='submit'>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {submittedData && (
                <div>
                    <h3>Submitted Data</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Age: {submittedData.age}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </form>
    )*/

    //Exercise 5: Toggle Switch
    //Create a button that toggles between "Show" and "Hide" when clicked. When it says "Show," a piece of text appears below the button. When it says "Hide," the text disappears.
    /*const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn)
    }

    return (
        <form>
            <button onClick={handleToggle} type='button'>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>The Switch is currently: {isOn ? 'ON' : 'OFF'}</p>
        </form>
    )*/

    //Exercise 6: Basic Counter with Limits
    // Create a counter component with a "Increment" button. The counter should increment by 1 each time the button is clicked, but it should not go above 10. Once it reaches 10, display a message saying, "Max reached."
    /*const [value, setValue] = useState(0);
    const [message, setMessage] = useState(null)

    const increment = () => {
        if(value < 10){
            setValue(value + 1);
            setMessage('')
        }
        else {
            setMessage('Max reached')
        }
        //setValue(value == 10 ? 'Max reached' : value + 1)
    }

    return (
        <form>
            <button type='button' onClick={increment}>Increment: {value}</button>
            {message && <p>{message}</p>}
        </form>
    )*/

    //Exercise 7: Dynamic Class Toggle
    // Create a component with a button that toggles between two colors when clicked. For example, the button can toggle between blue and green.
    /*const [isBlue, setIsBlue] = useState(true)
    const handleToggle = () => {
        setIsBlue((prevColor) => !prevColor)
    }
    return (
        <button type='button' onClick={handleToggle} className={isBlue ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}>Change Color</button>
    )*/


    //Exercise 9: Simple Counter with Reset
    //Objective: Build a counter with three buttons: Increment, Decrement, and Reset.
    /*const [counter, setCounter] = useState(0)
    const increment = () => {
        if (counter < 10) setCounter(counter + 1);
    }
    const decrement = () => {
        counter > 0 ? setCounter(counter - 1) : counter
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <div>
            <p>{counter}</p>
            <button type='button' onClick={increment}>Increment</button>
            <button type='button' onClick={decrement}>Decrement</button>
            <button type='button' onClick={reset}>Reset</button>
            
        </div>
    )*/

    //Exercise 10: Basic To-Do List
    const [listInput, setListInput] = useState('')
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setListInput(e.target.value)
    }

    const addItem = () => {
        if(listInput.trim()){
            setList([...list, listInput])
            setListInput('')
        }
    }

    const removeTask = (index) => {
        //setList(list.filter((item, i) => i !== index))
        const updatedTasks = [...list]; // Create a copy of the tasks array
        updatedTasks.splice(index, 1);   // Remove the item at the given index
        setList(updatedTasks);  
    }

    return (
        <form>
            <div>
                <input type='text' value={listInput} onChange={handleInputChange} placeholder='Enter a task' />
                <button type='button' onClick={addItem}>Add</button>
            </div>
            <ul>
                {list.map((listItem, index) =>(
                    <li key={index}>
                        {listItem}
                        <button type='button' onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </form>
    )
}

export default SimpleForm;