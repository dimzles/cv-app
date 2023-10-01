import React from 'react';
import Input from './Input';
import Card from './Card';
interface Props {
    onChange: React.ChangeEventHandler
    fullName: string
    email: string
    phoneNumber: number,
    userLocation: string
}

export default function GeneralInfo({
    onChange,
    fullName,
    email,
    phoneNumber,
    userLocation
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
                <Input 
                    id='phone-number'
                    inputLabel='Phone Number'
                    onChange={onChange}
                    value={phoneNumber}
                    type='tel'
                />
                <Input
                    id='location'
                    inputLabel='Location'
                    onChange={onChange}
                    value={userLocation}
                    type='text'
                />
            </form>
        </Card>
    )
}