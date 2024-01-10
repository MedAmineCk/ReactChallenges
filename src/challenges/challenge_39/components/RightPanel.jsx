import React from "react"
import rabbit from "../images/rabbit.png"
import turtle from "../images/turtle.png"
import volumeHighIcon from "../images/volume-high-icon.svg"
import volumeLowIcon from "../images/volume-low-icon.svg"

export default function RightPanel(props) {
	const {
		playbackRate,
		setPlaybackRate,
		volume,
		setVolume,
		loop,
		setLoop,
		loopingNotes,
		setLoopingNotes,
	} = props

	const [changeAllNotesVolume, setChangeAllNotesVolume] = React.useState(false)
	const [changeAllNotesPlayback, setChangeAllNotesPlayback] = React.useState(false)

	function reset() {
		loopingNotes.forEach((note) => {
			note.removeAttribute("src")
			note.load()
		})
		setLoopingNotes([])
		setLoop(false)
	}

	function undo(type) {
		if (loopingNotes.length > 0) {
			setLoopingNotes((prevNotes) => {
				const targetNote =
					type === "end" ? prevNotes[prevNotes.length - 1] : prevNotes[0]
				targetNote.removeAttribute("src")
				targetNote.load()
				return type === "end" ? prevNotes.slice(0, -1) : prevNotes.slice(1)
			})
		}
	}

	function handleSettingChange(value, settingFunction) {
		const newValue = +value
		const stateToCheck =
			settingFunction === setPlaybackRate ? changeAllNotesPlayback : changeAllNotesVolume

		settingFunction(newValue)

		if (stateToCheck) {
			setLoopingNotes((prevNotes) => {
				prevNotes.forEach((note) => {
					const currentValue =
						settingFunction === setPlaybackRate ? note.playbackRate : note.volume
					const targetAttribute =
						settingFunction === setPlaybackRate ? "playbackRate" : "volume"
					const newValueParsed =
						settingFunction === setVolume ? newValue / 100 : 
							newValue <= 10 ? newValue / 10 : newValue - 9
					if (currentValue < newValueParsed) {
						if (settingFunction === setVolume && currentValue < 1) {
							note[targetAttribute] = newValueParsed
						} else if (settingFunction === setPlaybackRate) {
							if (currentValue >= 1) {
								note[targetAttribute] = currentValue + 1
							} else if (currentValue < 1) {
								note[targetAttribute] = currentValue + 0.1
							}
						}
					} else if (currentValue > newValueParsed) {
						if (settingFunction === setVolume && currentValue > 0) {
							note[targetAttribute] = newValueParsed
						} else if (settingFunction === setPlaybackRate) {
							if (currentValue > 1) {
								note[targetAttribute] = currentValue - 1
							} else if (currentValue <= 1) {
								note[targetAttribute] = currentValue - 0.1
							}
						}
					}
				})
				return prevNotes
			})
		}
	}

	return (
		<div className="right-panel-container">
			<div className="playback-container">
				<div className="icon-container">
					<img className="fast-icon" src={rabbit} />
				</div>
				<button
					className={`selector-button playback-button ${
						changeAllNotesPlayback ? "active" : "inactive"
					}`}
					onClick={() => setChangeAllNotesPlayback(!changeAllNotesPlayback)}
				>
				all
				</button>
				<div className="icon-container">
					<img className="slow-icon" src={turtle} />
				</div>
			</div>

			<input
				className="playback-slider"
				type="range"
				value={playbackRate}
				onChange={(e) => handleSettingChange(e.target.value, setPlaybackRate)}
				min={1}
				max={19}
			/>

			<div className="settings-button-container">
				<button className="reset-button selector-button" onClick={reset}>
					reset
				</button>

				<div className="undo-container">
					<button
						className="undo-button selector-button"
						onClick={() => undo("start")}
					>
						un
					</button>

					<button
						className="undo-button selector-button"
						onClick={() => undo("end")}
					>
						do
					</button>
				</div>

				<button
					className={`loop-button selector-button ${loop ? "active" : "inactive"}`}
					onClick={() => setLoop(!loop)}
				>
					loop
				</button>
			</div>

			<input
				className="volume-slider"
				type="range"
				value={volume}
				min={0}
				max={99}
				onChange={(e) => handleSettingChange(e.target.value, setVolume)}
			/>

			<div className="volume-container">
				<div className="icon-container">
					<img className="volume-high-icon" src={volumeHighIcon} />
				</div>

				<button
					className={`selector-button volume-button 
						${changeAllNotesVolume ? "active" : "inactive"}`}
					onClick={() => setChangeAllNotesVolume(!changeAllNotesVolume)}
				>
					all
				</button>

				<div className="icon-container">
					<img className="volume-low-icon" src={volumeLowIcon} />
				</div>
			</div>
		</div>
	)
}
