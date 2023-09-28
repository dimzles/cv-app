type GeneralInfoProps = {
    fullName: string
    email: string
}


export default function GeneralInfoDisplay({fullName, email}: GeneralInfoProps) {
    return (
        <div className="general-info">
            <h1 className="cv-name">{fullName}</h1>
            <div className="contact-info">
                {email}
            </div>
        </div>
    )
}