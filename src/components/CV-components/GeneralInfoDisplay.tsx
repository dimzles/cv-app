import { GeneralInfoData } from "../../Types"
import '../../styles/GeneralInfo.css'

export default function GeneralInfoDisplay({fullName, email, phoneNumber, userLocation}: GeneralInfoData) {
    return (
        <div className="general-info">
            <h1 className="cv-name">{fullName}</h1>
            <div className="contact-info">
                {email}
                {phoneNumber}
                {userLocation}
            </div>
        </div>
    )
}