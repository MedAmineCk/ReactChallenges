import React from "react"
import { nanoid } from "nanoid"

export default function FrontMessage() {
	return (
		<p>
			{"Do you know what this for loop would log to the console?"
				.split(" ")
				.map((word, index) => {
					const options = ["pink", "blue", "green"]
					const className = options[index % 3]
					return (
						<span key={nanoid()} className={className}>
							{word}{" "}
						</span>
					)
				})}
		</p>
	)
}
