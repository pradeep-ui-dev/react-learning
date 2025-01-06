import { useState } from 'react'
import HookExamples from './HookExamples';

function App() {
  const [selectedHook, setSelectedHook] = useState('');
  const [selectedExample, setSelectedExample] = useState('');

  const hooks = ["useState", "useEffect", "useContext"];
  const examples = {
    useState : ["Check Password", "Counter", "Toggle Boolean", "Add Items", "Counter with Step", "Task Tracker"],
    useEffect: ["API Call", "Timer", "Event Listener"],
    useContext: ["Theme COntext", "User Context"]
  };

  return (
    <>
      <div style={{padding: "20px"}}>
        <h1>React Hooks Practice</h1>
        <div>
          <label>Select Hooks</label>
          <select 
            value={selectedHook} 
            onChange={(e) => {
              setSelectedHook(e.target.value);
              setSelectedExample("");
            }}>
            <option value="">--Select--</option>
            {hooks.map((hook, index) => (              
              <option key={index} value={hook}>
                {hook}
              </option>
            ))}
          </select>
        </div>

        {selectedHook && (
          <div>
            <label>Select Example:</label>
            <select
              value={selectedExample}
              onChange={(e) => setSelectedExample(e.target.value)}
            >
              <option value="">--Select Example--</option>
              {examples[selectedHook].map((example, index) => (
                <option key={index} value={example}>{example}</option>
              ))}
            </select>
          </div>
        )}
        
        <div style={{marginTop: "20px"}}>
          <HookExamples hook={selectedHook} example={selectedExample} />
        </div>
      </div>
      
    </>
  )
}

export default App
