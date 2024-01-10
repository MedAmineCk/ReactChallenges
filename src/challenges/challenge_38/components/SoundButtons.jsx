import React from "react"
import soundOff from "../assets/images/icons/sound-off.svg"
import soundOn from "../assets/images/icons/sound-on.svg"

export default function SoundButtons({ clickHandlers }) {
	return (
		<div className="start-and-select-buttons-container">
			<div className="select-button">
				<button onClick={clickHandlers.turnOffSound}></button>
				<span>Select</span>
				<img src={soundOff} />
			</div>

			<div className="start-button">
				<button onClick={clickHandlers.turnOnSound}></button>
				<span>Start</span>
				<img src={soundOn} />
			</div>
		</div>
	)
}
