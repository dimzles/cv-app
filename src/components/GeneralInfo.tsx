import React from 'react';
import Input from './Input';
import Card from './Card';
import { GeneralInfoData } from '../Types';
interface Props extends GeneralInfoData {
    onChange: React.ChangeEventHandler
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
                    id='phoneNumber'
                    inputLabel='Phone Number'
                    onChange={onChange}
                    value={phoneNumber}
                    type='tel'
                />
                <Input
                    id='userLocation'
                    inputLabel='Location'
                    onChange={onChange}
                    value={userLocation}
                    type='text'
                />
            </form>
        </Card>
    )
}