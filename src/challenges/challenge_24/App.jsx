import React, {useEffect} from "react"
import "./style.scss"
import emailList from "./data/emailList"
import TopText from "./components/TopText"

export default function App() {
	const [userInput, setUserInput] = React.useState("")
	const [userEmail, setUserEmail] = React.useState("")
    const [duplicate, setDuplicate] = React.useState(null)
    
	function handleChange(e) {
		setUserInput(e.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setUserEmail(userInput);
		setUserInput("");

		const isDuplicated = emailList.find(email => email.toLowerCase() === userInput.toLowerCase()) ? true : null
		setDuplicate(isDuplicated)
	}


	console.log({userInput}, {userEmail}, {duplicate})

		
/* Challenge

    Nothing happens when the user clicks the "Subscribe" button. Your task is to make the sign-up form work by completing these tasks: 
    
        1. When the user clicks the "Subscribe" button, the following should happen: 
			a. The userEmail state should be set to the string stored inside the userInput state.
			b. The userInput state should be set back to its initial state — an empty string.  
			c. Your code should run a case-insensitive check of whether the email address the 
			   user entered already exists in the emailList array. If it does, the duplicate state should be set to true. Otherwise, it should be set to false. 
        
        2. You should test the form with the following three email addresses: 
		
				  		 Email		 			  Expected Result 				  
			╷-----------------------------╷-----------------------------╷					
		  	|     noDuplicate@gmail.com   |	    non-duplicate message   |
			|-----------------------------|-----------------------------|
			|  TestyMcTesterson@gmail.com |	      duplicate message 	|
			|-----------------------------|-----------------------------|
			|  testymctesterson@gmail.com |		  duplicate message     |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	
            
        3. If you do the above correctly and click the "Subscribe" button, you should also see the 
		   placeholder text of the input become "Subscribe a friend", and you and be able to enter another email address and check it as well.
 */

	return (
		<div className="challenge_24">
			<form className="form" onSubmit={handleSubmit}>

				<TopText userEmail={userEmail} duplicate={duplicate}/>

				<div>

					<input
						required
						placeholder={!userEmail ? "Enter your email" : "Subscribe a friend!"}
						type="email"
						name="email"
						onChange={handleChange}
						value={userInput}
					/>

					<button type="submit">
						Subscribe
					</button>

				</div>

			</form>
		</div>
	)
}
