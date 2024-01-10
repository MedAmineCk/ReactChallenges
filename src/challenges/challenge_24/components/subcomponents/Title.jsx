import React from "react"

export default function Title(props) {
    
    let message 
    
    if (props.userEmail) {
        if (props.duplicate) {
            message = "Thanks again for subscribing!"
        } else {
            message = "Thanks for subscribing to my spam-free newsletter!"
        }
    } else {
        message = "Subscribe to my spam-free React newsletter!"
    }
	return (
		<h1 className="title">
			{message}
		</h1>
	)
}
