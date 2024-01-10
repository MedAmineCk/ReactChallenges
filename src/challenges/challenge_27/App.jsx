import React, {useState} from "react"
import "./style.scss"
import Thermometer from "./components/Thermometer"
import Header from "./components/Header"

export default function App() {

	const [timeCount, setTimeCount] = React.useState(0)
	const timeToDisplay = (timeCount / 100).toFixed(2)

	const [cursorInButton, setCursorInButton] = useState(false);
	const [buttonHeldDown, setButtonHeldDown] = useState(false);

	const buttonClass = !timeCount ? "outsideButton" : undefined

/* Challenge

	This virtual amusement park game is broken because a horrible hacker deleted two of its states and four of its event handlers. Your task is to fix it by doing the following: 
	
		1. If the user's cursor goes inside the "Hold Down" button and they press down their 
		   mouse button, the two missing states should have their values change accordingly. If these state changes happen, then the existing code in the useEffect of the try block below should make the timer and thermometer start to go up.
		   
		2. If the user's cursor exits the button or if they let up their mouse button, the two 
		   missing states should have their values change accordingly.
		   
		3. All of these things should be accomplished simply via changes in the missing state 
		   values, which are triggered by the missing event handlers. You SHOULD NOT delete, add, or modify any code beside these missing states and event handlers. The try block and the useEffect below will work perfectly fine as they are already written if you do this correctly. 
		   
		Bonus Challenge: see if you can handle all four of the events with only two — or even just one — function!
*/

	try {
		React.useEffect(() => {
			let interval
			if (cursorInButton && buttonHeldDown) {
				interval = setInterval(() => {
					setTimeCount(timeCount => timeCount + 1)
				}, 10)
			}
			return () => {
				setTimeCount(0)
				if (buttonHeldDown && !cursorInButton) {
					setButtonHeldDown(false)
				}
				clearInterval(interval)
			}
		}, [cursorInButton, buttonHeldDown])
	} catch {
		console.log("HAHA, your app has been hacked! I deleted two of your states and four of your event handlers! Try to see if you can catch them 😜")
	}

	const toggleCursorInButton = () => {
		setCursorInButton(prev => !prev)
	}

	const toggleButtonDown = () => {
		setCursorInButton(prev => !prev)
		setButtonHeldDown(prev => !prev)
	}

	return (
		<div className="challenge_27">
			<div className="wrapper">
				<Header time={+timeToDisplay} />
				<Thermometer time={+timeToDisplay} />
				<button className={buttonClass}
						// onMouseEnter={toggleCursorInButton}
						// onMouseLeave={toggleCursorInButton}
						onMouseDown={toggleButtonDown}
						onMouseUp={toggleButtonDown}
				>Hold Down</button>
				<p className="time">{timeToDisplay} seconds </p>
			</div>
		</div>
	)
}
