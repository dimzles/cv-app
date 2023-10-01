import GeneralInfoDisplay from "./CV-components/GeneralInfoDisplay"

interface Props {
    fullName: string
    email: string
    phoneNumber: number
    userLocation: string
}

export default function CV({ fullName, email, phoneNumber, userLocation }: Props) {
    return (
        <div>
            <GeneralInfoDisplay fullName={fullName} email={email} phoneNumber={phoneNumber} userLocation={userLocation}/>
        </div>
    )
}