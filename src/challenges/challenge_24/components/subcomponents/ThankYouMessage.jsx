import React from "react" 

export default function ThankYouMessage(props) {
    return (
        <div className="thank-you">
            <p>
                A welcome email will be sent to <span className="email">{props.userEmail}</span> in the next 60 seconds. 
            </p>
            <p>
                Oh, and if you click the email's confirmation link in the next five minutes, you will receive a <span>once-in-a-lifetime opportunity</span> to upgrade to my premium newsletter for only $5 per month!
            </p>
        </div>
    )
}