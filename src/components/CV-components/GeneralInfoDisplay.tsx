import { GeneralInfoData } from "../../Types"
import '../../styles/GeneralInfo.css'

export default function GeneralInfoDisplay({fullName, email, phoneNumber, userLocation}: GeneralInfoData) {
    return (
        <div className="general-info">
            <h1 className="cv-name">{fullName}</h1>
            <div className="contact-info">
                {/* Using the && comparison check here only renders the icon if the input field has a value */}
                {email && (
                    <span className="general-icon"><i className="fa-solid fa-envelope"></i> {email}</span>
                )}
                {phoneNumber && (
                    <span className="general-icon"><i className="fa-solid fa-phone"></i> {phoneNumber}</span>
                )}
                {userLocation && (
                    <span className="general-icon"><i className="fa-solid fa-location-dot"></i> {userLocation}</span>
                )}
            </div>
        </div>
    )
}