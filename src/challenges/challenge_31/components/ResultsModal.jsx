import React from "react"
import gear from "../images/gear.svg"

export default function ResultsModal(props) {
	const message = !props.resultsReady ? (
		<div className="modal-inner-container">
			<img src={gear} /> <p>Calculating Results</p>{" "}
		</div>
	) : (
		<div className="modal-inner-container">
			<ul className="bounce-top">
				{props.likedEmojis.map(props.generateListItems)}
			</ul>
			<p>
				Your personality is: <span>great</span>!
			</p>
			<button className="try-again-button" onClick={props.reset}>
				Try Again
			</button>
		</div>
	)

	if (props.likedEmojis.length >= 10) {
		return (
			<div className="results-modal-container">
				{!props.showResults ? (
					<div className="modal-inner-container">
						<button className="get-results-button" onClick={props.getResults}>
							Get Results
						</button>
					</div>
				) : (
					message
				)}
			</div>
		)
	} else {
		return null
	}
}
