import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import CV from "./components/CV";
import React, { useState } from "react";

function App() {
    const [fullName, setFullName] = useState('')
    
    function handleSetFullName(e: React.ChangeEvent<HTMLInputElement>) {
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