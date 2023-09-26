import React from 'react';
import Input from './Input';

interface Props {
    onChange: React.ChangeEventHandler
    fullName: string
}

export default function GeneralInfo({
    onChange,
    fullName,
}: Props) {
    return (
        <form>
            <h2>General Information</h2>
            <Input 
                id='fullName' 
                inputLabel='Full Name' 
                onChange={onChange} 
                value={fullName} 
                type='text' 
                />
        </form>
    )
}