import React from "react"

export default function DuplicateMessage(props) {
    return (
        <p>
             The email address, <span className="email">{props.userEmail}</span>, is already subscribed to my mailing list — but I appreciate that you love my newsletter so much that you want to sign up for it again! As a token of my gratitude, I am going to send you a <span> one-time offer </span> to subscribe to my premium newsletter for only $5 per month!
        </p>
    )
}