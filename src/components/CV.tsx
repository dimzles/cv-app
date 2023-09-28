import GeneralInfoDisplay from "./CV-components/GeneralInfoDisplay"

interface Props {
    fullName: string
    email: string
}

export default function CV({ fullName, email }: Props) {
    return (
        <div>
            <GeneralInfoDisplay fullName={fullName} email={email}/>
        </div>
    )
}