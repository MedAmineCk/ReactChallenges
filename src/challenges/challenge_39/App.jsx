import React from "react"
import "./style.scss"
import Settings from "./components/Settings"
import Keys from "./components/Keys"

export default function App() {
	const [currentInstrument, setCurrentInstrument] = React.useState("piano")
	const [playbackRate, setPlaybackRate] = React.useState(10)
	const [volume, setVolume] = React.useState(50)
	const [loop, setLoop] = React.useState(false)
	const [loopingNotes, setLoopingNotes] = React.useState([])
	const [showKeys, setShowKeys] = React.useState({
		musicKeys: false,
		computerKeys: false,
		noKeys: true,
	})

	const [synthKeys, setSynthKeys] = React.useState([
		{
			keyName: "c2",
			displayName: "c2",
			computerKey: "a",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "c-sharp",
			displayName: "c#",
			computerKey: "w",
			color: "black",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "d",
			displayName: "d",
			computerKey: "s",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "d-sharp",
			displayName: "d#",
			computerKey: "e",
			color: "black",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "e",
			displayName: "e",
			computerKey: "d",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "f",
			displayName: "f",
			computerKey: "f",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "f-sharp",
			displayName: "f#",
			computerKey: "t",
			color: "black",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "g",
			displayName: "g",
			computerKey: "g",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "g-sharp",
			displayName: "g#",
			computerKey: "y",
			color: "black",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "a",
			displayName: "a",
			computerKey: "h",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "a-sharp",
			displayName: "a#",
			computerKey: "u",
			color: "black",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "b",
			displayName: "b",
			computerKey: "j",
			color: "white",
			active: false,
			keyPressed: false,
		},

		{
			keyName: "c3",
			displayName: "c3",
			computerKey: "k",
			color: "white",
			active: false,
			keyPressed: false,
		}
	])
	
	const activeKey = synthKeys.find(key => key.active)
	
	if (activeKey) {
		playNote(`./sounds/${currentInstrument}/${activeKey.keyName}.mp3`)
		setSynthKeys(prevKeys =>
			prevKeys.map(key =>
				key === activeKey ? { ...key, active: false } : key
			)
		)
	}
	
	function playNote(note) {
		let audio = new Audio(note)
		audio.volume = volume / 100
		audio.playbackRate = playbackRate <= 10 ? playbackRate / 10 : playbackRate - 9
		audio.loop = loop
		audio.play()
		loop && setLoopingNotes([...loopingNotes, audio])	
	}
	
	const propsBundle = { 
		currentInstrument, setCurrentInstrument,
		playbackRate, setPlaybackRate,
		volume, setVolume, loop, setLoop,
		loopingNotes, setLoopingNotes, 
		showKeys, setShowKeys
	}

/* Challenge

	Something important isn't yet working on this synth keyboard: the keys! Your task is to allow the user to play the keys with either their mouse button or computer keyboard as follows:  
	
		1. When a user plays a synth key with their mouse button or computer key, the active 
		   property of the synth key's corresponding object in the synthKeys state array should be set to true. 
		   
				   - Playing a synth key with the mouse button means pressing the mouse button  
				     down (*not* clicking) on the synth key. 
					 
				   - Playing a synth key with a computer key means pressing down the computer key 
				     corresponding to it, as defined by the synth key's corresponding computerKey property in the synthKeys state array. 
				
		2. If the user plays a synth key by pressing down a computer key, the keyPressed property 
		   of the synth key's corresponding object in the synthKeys state array should also be set to true. When the user lifts up the computer key, the keyPressed property should be set back to false. 
		   
		3. All other properties of the object and all other objects in the synthKeys state array 
		   should be preserved every time the state is updated. Only the active property and (if applicable) the keyPressed property of the targeted object should be changed. 
		
		4. You should only write code for three event handlers below to complete the challenge. No 
		   other code should be changed or added anywhere else in the project. You should also check the keys for bugs before finishing the challenge. Play some music on it 
		   to simulate how a user is likely to interact with it. 
		   
		Note: If you have a non-QWERTY keyboard, feel free to change the computerKey properties in the synthKey state array to computer keys that make more sense for your keyboard layout!
		
		Tip: Add onClick={(e)=>console.log(e.target)} to the "main-container" div and click on the keys to familiarize yourself with the underlying DOM, or look at the Keys component in the components folder.  
*/

	function handleInteraction(event) {

		const targetKey = synthKeys.find(key => {
			if (event.type === "mousedown") {
				return event.target.dataset.note === key.keyName
			} else {
				return event.key === key.computerKey
			}
		})

		if (targetKey && !event.repeat) {
			setSynthKeys(prev => {

				function updateKey(key) {
					const updatedKey = {
						...key,
						active: event.type === "keyup" ? false : true,
						keyPressed:
							event.type === "keydown" ? true
								: event.type === "keyup" ? false
									: key.keyPressed
					}
					return updatedKey
				}

				return prev.map(key => key === targetKey ? updateKey(key) : key)
			})
		}
	}

	return (
		<div className="challenge_39">
			<div className="wrapper">
				<div className="main-container"
					 onMouseDown={handleInteraction}
					 onKeyDown={handleInteraction}
					 onKeyUp={handleInteraction}
				>

					<Settings {...propsBundle} />

					<Keys
						showKeys={showKeys}
						synthKeys={synthKeys}
					/>

				</div>
			</div>
		</div>
	)
}
