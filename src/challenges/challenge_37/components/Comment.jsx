import React from "react"

export default function Comment(props) {
    return (
        <div className="individual-comment-container">
            <p><a className="bold">@{props.isAnonymous ? "AnonymousUser" : props.userName}:</a></p>
            <p>{props.commentText}</p>
        </div>
    )
}