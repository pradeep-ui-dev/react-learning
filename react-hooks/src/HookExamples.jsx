import React from "react";
import CheckPassword from "./examples/useState/CheckPassword";
import Counter from "./examples/useState/Counter";
import ToggleBoolean from "./examples/useState/ToggleBoolean";
import AddItems from "./examples/useState/AddItems";
import CounterWithStep from "./examples/useState/CounterWithStep";
import ApiCall from "./examples/useEffect/ApiCall"
import TaskTracker from "./examples/useState/TaskTracker";

function HookExamples({hook, example}){
    if(!hook) return <p>Please select a Hook</p>
    if(!example) return <p>Please select a Example to see the output.</p>

    if(hook === "useState"){
        switch(example){
            case "Check Password": return <CheckPassword/>;
            case "Counter" : return <Counter/>;
            case "Toggle Boolean" : return <ToggleBoolean />;
            case "Add Items" : return <AddItems/>;
            case "Counter with Step": return <CounterWithStep />;
            case "Task Tracker": return <TaskTracker />;
            default : return null
        }
    }
    else if(hook === "useEffect"){
        switch(example){
            case "API Call" : return <ApiCall/>;
            default: return null
        }
    }
    return <p>Component not implemented yet for {hook} - {example}.</p>
}

export default HookExamples;