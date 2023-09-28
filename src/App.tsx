import GeneralInfo from "./components/GeneralInfo";
import CV from "./components/CV";
import React, { useState } from "react";
import '../src/styles/App.css'
import ExampleData from "./ExampleData.ts";
interface GeneralInfoData {
    fullName: string,
    email: string
}

function App() {
    //Have to pass some example data in here otherwise TypeScript is very unhappy due to generalInfo possibly being undefined!
    const [generalInfo, setGeneralInfo] = useState<GeneralInfoData>(ExampleData)
    
    function handleSetGeneralInfo(e: React.ChangeEvent<HTMLInputElement>) {
        const id = e.target.id;
        setGeneralInfo({...generalInfo, [id]: e.target.value})
    }

    return (
        <div className="app">
            <div className="container">
            <GeneralInfo 
            fullName={generalInfo.fullName}
            email={generalInfo.email}
            onChange={handleSetGeneralInfo}
            />
            <CV 
            fullName={generalInfo.fullName}
            email={generalInfo.email}/>
            </div>
        </div>
    )
}

export default App;