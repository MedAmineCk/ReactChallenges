import React, {useEffect} from "react"
import "./style.scss"
import Message from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
	const passCode = "1001"

	const [userInput, setUserInput] = React.useState({
		charOne: "",
		charTwo: "",
		charThree: "",
		charFour: "",
	})
	
	const [verified, setVerified] = React.useState(undefined)

/* Challenge

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	
		1. When the user types a character in one of the password inputs, the corresponding 
		   property of the userInput state object should be updated, while preserving the other properties. Note that the property names and the names of the inputs match each other (charOne, charTwo, etc.)
		   
		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/

	const inputHandle = (e) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		setUserInput(prev => ({...prev, [inputName]: inputValue}))
	}

	const formHandle = (e) => {
		e.preventDefault()
		const inputValueString = Object.values(userInput).join('');

		setVerified(inputValueString === passCode)
	}



	useEffect(() => {
		console.log(userInput)
	}, [userInput]);


	return (
		<div className="challenge_13">
			<div className="wrapper">
				<Header />

				<form onSubmit={formHandle}>

					<Message status={verified} />

					<div>
						<input
							required
							type="password"
							name="charOne"
							onChange={inputHandle}
						/>

						<input
							required
							type="password"
							name="charTwo"
							maxLength="1"
							onChange={inputHandle}
						/>

						<input
							required
							type="password"
							name="charThree"
							maxLength="1"
							onChange={inputHandle}
						/>

						<input
							required
							type="password"
							name="charFour"
							maxLength="1"
							onChange={inputHandle}
						/>

					</div>

					<button disabled={verified}>Submit</button>
				</form>

				<Footer />
			</div>
		</div>
	)
}
