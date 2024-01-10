import React from "react"
import innerCardContent from "../images/innerCardContent.png"

export default function InnerMessage() {
	return (
		<div className="inner-container">
			<img className="inner-img" src={innerCardContent} alt="inner img"/>
			<div className="balloon">🎈</div>
		</div>
	)
}
