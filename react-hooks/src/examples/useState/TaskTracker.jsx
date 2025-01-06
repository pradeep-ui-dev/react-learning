import React, {useState} from "react";

export default function TaskTracker(){
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    const addTask = () => {
        if(taskName.trim()){
            const newTask = { name: taskName, completed: false };
            setTasks([...tasks, newTask]);
            setTaskName("");
        }
    }

    const toggleCompletion = (index) => {
        const updatedTask = tasks.map((task, i) => 
            (
                i === index ? { ...task, completed: !task.completed} : task
            )
            
        )
        setTasks(updatedTask)
    }

    return (
        <div>
            <input type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleCompletion(index)}
                        />
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}