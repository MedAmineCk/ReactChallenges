import React from "react"

export default function SolicitationMessage() {
    
	const [amount, setAmount] = React.useState(5)

	function handleClick() {
		const message = `Send user to landing page for premium newsletter. Charge them $${amount} per month.`
		console.log(message)
		setAmount(amount + 5)
	}
    
	return (
		<p>
			Want more tricks and tips on how to use React? Subscribe to my weekly
			newsletter! I swear I will never spam you with clickbaity attempts to upsell
			you! No, really, I won't — I promise! Oh, also, if you want to learn the
			{" "}<span>one secret trick</span> that the creators of React 
            don't want you to know about, {" "}
            
			<a href="#" onClick={handleClick}>
				please click here
			</a>
            
			{" "} to read more!
		</p>
	)
}
