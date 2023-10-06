import Card from "./Card";
import Input from "./Input";
import { EducationInfoData } from "../Types";
import React from "react";

interface EducationData extends EducationInfoData {
    onChange: React.ChangeEventHandler
}

export default function Education({ university, startDate, endDate, description, onChange }: EducationData) {
    return (
        <Card>
            <h2>Education</h2>
            <Input id="university" inputLabel="University" type="text" value={university} onChange={onChange} />
            <Input id="start-date" inputLabel="Start Date" type="date" value={startDate} onChange={onChange} />
            <Input id="end-date" inputLabel="End Date" type="date" value={endDate} onChange={onChange} />
            <Input id="description" inputLabel="Description" type="text" value={description} onChange={onChange} />
        </Card>
    )
}