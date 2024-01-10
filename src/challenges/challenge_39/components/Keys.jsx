import React from "react"

export default function Keys({synthKeys, showKeys}) {


	const keyButtons = synthKeys.map(key => {
		const {displayName, computerKey, keyName, color} = key
		const activeClass = key.keyPressed ? "active" : undefined
		const keyClassName = ["key", keyName, color, activeClass].join(" ")
		const keyNameToShow = showKeys.musicKeys ? displayName : 
			showKeys.computerKeys ? computerKey : ""

		return (
			<button 
				key={keyName} 
				className={keyClassName} 
				data-note={keyName}
				autoFocus={keyName === "c2" ? true : false}
			>
				{keyNameToShow}
			</button>
		)
	})
	
	return (
		<div className="keys-container">
			{keyButtons}
		</div>
	)
}
