import GeneralInfo from "./components/GeneralInfo";
import CV from "./components/CV";
import React, { useState } from "react";
import '../src/styles/App.css'
import ExampleData from "./ExampleData.ts";

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
                <div className="information">
                    <GeneralInfo 
                    fullName={generalInfo.fullName}
                    email={generalInfo.email}
                    phoneNumber={generalInfo.phoneNumber}
                    userLocation={generalInfo.userLocation}
                    onChange={handleSetGeneralInfo}
                    />
                </div>
            <CV 
                fullName={generalInfo.fullName}
                email={generalInfo.email}
                phoneNumber={generalInfo.phoneNumber}
                userLocation={generalInfo.userLocation}
            />
            </div>
        </div>
    )
}

export default App;