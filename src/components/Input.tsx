import React from 'react'
import '../styles/Input.css'

interface Props {
    id: string
    inputLabel: string
    onChange: React.ChangeEventHandler
    value: string | number;
    type: string;
}

export default function Input({
    id,
    inputLabel,
    onChange,
    value,
    type
}: Props) {
    return (
        <div className='input'>
            <label htmlFor={id}>
                <span className="label-text">{inputLabel}</span>
            </label>

            <input type={type}
            id={id}
            onChange={onChange}
            value={value} />
        </div>
    )
}