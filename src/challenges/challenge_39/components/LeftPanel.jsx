import React from "react"
import musicSolid from "../images/music-solid.svg"
import keyboardSolid from "../images/keyboard-solid.svg"
import circleXmarkRegular from "../images/circle-xmark-regular.svg"
import metronomeImg from "../images/metronome.png"

export default function LeftPanel(props) {
	
	const {
		currentInstrument,
		setCurrentInstrument,
		showKeys,
		setShowKeys,
		volume
	} = props
	
	const [metronome, setMetronome] = React.useState(undefined)

	function toggleMetronome() {
		if (!metronome) {
			let audio = new Audio("sounds/metronome.mp3")
			audio.volume = volume / 100
			audio.loop = true
			audio.play()
			setMetronome(audio)
		} else {
			setMetronome(prev => {
				prev.removeAttribute("src")
				prev.load()
				return undefined
			})
		}
	}

	function handleClick(e) {
		if (e.target.dataset.instrument) {
			setCurrentInstrument(e.target.dataset.instrument)
		} else if (e.target.id === "notes-button") {
			setShowKeys(prev => {
				return {
					musicKeys: prev.musicKeys ? false : prev.noKeys ? false : true,
					computerKeys: prev.computerKeys ? false : prev.musicKeys ? false : true,
					noKeys: prev.noKeys ? false : prev.computerKeys ? false : true,
				}
			})
		}
	}

	const instruments = ["piano", "strings", "synth", "drum", "marimba", "harp"]

	const instrumentButtons = instruments.map((instrument) => {
		const activeClass = instrument === currentInstrument ? "active" : "inactive"
		const buttonClassName = "selector-button " + activeClass
		return (
			<button
				key={instrument}
				className={buttonClassName}
				data-instrument={instrument}
			>
				{instrument}
			</button>
		)
	})
	
	let imageToShow
	
	if (showKeys.noKeys) {
		imageToShow = <img className="notes-icon" src={musicSolid} />
	} else if (showKeys.musicKeys) {
		imageToShow = <img className="keyboard-icon" src={keyboardSolid} />
	} else {
		imageToShow = <img className="blank-icon" src={circleXmarkRegular} />
	}
				
	return (
		<div className="left-panel-container" onClick={handleClick}>
			<h1>Scrimbatronic</h1>

			<div className="little-buttons-container">
			<button
				onClick={handleClick}
				className="selector-button notes-button"
				id="notes-button"
			>
				{imageToShow}
			</button>

			<button
				className={`selector-button metronome-button ${metronome ? "active" : "inactive"}`}
				onClick={toggleMetronome}
			>
				<img className="metronome-icon" src={metronomeImg} />
			</button>
			
			</div>

			{instrumentButtons}
		</div>
	)
}
