import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import CV from "./components/CV";
import { useState } from "react";

function App() {
    const [fullName, setFullName] = useState('')
    
    //TODO: figure out how to type this 'e' to avoid TS errors!
    function handleSetFullName(e) {
        if (e.target.value !== undefined) {
            setFullName(e.target.value)
        }
    }

    return (
        <div className="app">
            <Header title="CV Generator"/>
            <GeneralInfo 
            fullName={fullName}
            onChange={handleSetFullName}
            />
            <CV 
            fullName={fullName}/>
        </div>
    )
}

export default App;