import React from "react"

export default function ActionButton(props) {
	return (
		<div className={props.containerClass}>
			<button
				autoFocus={props.name === "A"}
				className={props.buttonClass}
				disabled={props.disabled}
				onClick={props.clickHandler}
			></button>
			<span>{props.name}</span>
		</div>
	)
}
