interface Props {
    fullName: string
}

export default function CV({ fullName }: Props) {
    return (
        <div>
            <h1>{fullName}</h1>
        </div>
    )
}