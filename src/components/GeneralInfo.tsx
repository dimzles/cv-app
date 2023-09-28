import React from 'react';
import Input from './Input';
import Card from './Card';
interface Props {
    onChange: React.ChangeEventHandler
    fullName: string
    email: string
}

export default function GeneralInfo({
    onChange,
    fullName,
    email
}: Props) {
    return (
        <Card style={{}}> 
            <form>
                <h2>General Information</h2>
                <Input 
                    id='fullName' 
                    inputLabel='Full Name' 
                    onChange={onChange} 
                    value={fullName} 
                    type='text' 
                    />
                <Input 
                    id='email'
                    inputLabel='Email'
                    onChange={onChange}
                    value={email}
                    type='email'
                />
            </form>
        </Card>
    )
}