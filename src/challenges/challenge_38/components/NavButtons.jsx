import React from "react"

export default function NavButtons({ mouseHandler, wantsToMove, direction, escaped }) {
	function handleLeave(event) {
		if (wantsToMove) {
			mouseHandler(event)
		}
	}
	return (
		<div className="navigation-buttons-container">
			<button
				onMouseDown={mouseHandler}
				onMouseUp={mouseHandler}
				onMouseLeave={handleLeave}
				className={`navigation-button left ${
					wantsToMove && direction === "left" ? "active" : ""
				}`}
				data-direction="left"
			></button>
			<button
				onMouseDown={mouseHandler}
				onMouseUp={mouseHandler}
				onMouseLeave={handleLeave}
				className={`navigation-button right ${
					wantsToMove && direction === "right" ? "active" : ""
				}`}
				data-direction="right"
			></button>
			<div className="center-container"></div>
			<button
				onMouseDown={mouseHandler}
				onMouseUp={mouseHandler}
				onMouseLeave={handleLeave}
				className={`navigation-button up ${
					wantsToMove && !escaped && direction === "up" ? "active" : ""
				}`}
				data-direction="up"
			></button>
			<button
				onMouseDown={mouseHandler}
				onMouseUp={mouseHandler}
				onMouseLeave={handleLeave}
				className={`navigation-button down ${
					wantsToMove && direction === "down" ? "active" : ""
				}`}
				data-direction="down"
			></button>
		</div>
	)
}
