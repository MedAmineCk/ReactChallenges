import React from "react"
import ThankYouMessage from "./ThankYouMessage"
import SolicitationMessage from "./SolicitationMessage"
import DuplicateMessage from "./DuplicateMessage"

export default function Description(props) {
	let message

	if (props.userEmail) {
		message = props.duplicate ? (
			<DuplicateMessage userEmail={props.userEmail} />
		) : (
			<ThankYouMessage userEmail={props.userEmail} />
		)
	} else {
		message = <SolicitationMessage />
	}

	return <div className="description">{message}</div>
}
