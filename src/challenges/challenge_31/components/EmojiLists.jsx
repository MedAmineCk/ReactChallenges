import React from "react"

export default function EmojiLists(props) {
	return (
		<div className="overall-emoji-lists-container">
			<div className="individual-emoji-list-container">
				<h3> Liked Emojis</h3>
				<ul>{props.likedEmojis.map(props.generateListItems)}</ul>
			</div>

			<div className="individual-emoji-list-container">
				<h3> Passed Emojis</h3>
				<ul>{props.passedEmojis.map(props.generateListItems)}</ul>
			</div>
		</div>
	)
}
