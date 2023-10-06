import GeneralInfoDisplay from "./CV-components/GeneralInfoDisplay"

interface Props {
    fullName: string
    email: string
    phoneNumber: string
    userLocation: string
}

export default function CV({ fullName, email, phoneNumber, userLocation }: Props) {
    return (
        <div className="cv">
            <GeneralInfoDisplay fullName={fullName} email={email} phoneNumber={phoneNumber} userLocation={userLocation}/>
        </div>
    )
}