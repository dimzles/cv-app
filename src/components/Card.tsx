import React from "react"
import '../styles/Card.css'

interface CardProps {
    children: React.ReactNode;
    style?: React.CSSProperties
}

export default function Card(props: CardProps) {
    return (
        <div className="card" style={props.style}>
            {props.children}
        </div>
    )
}