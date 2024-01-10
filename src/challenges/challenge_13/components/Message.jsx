import React, {useEffect, useState} from "react"

export default function Message({ status }) {
	let checkType
	let message

	if (status === undefined) {
		checkType = "neutral"
		message = "Enter verification code to continue."
	} else if (status) {
		checkType = "correct"
		message = "Verified!"
	} else {
		checkType = "incorrect"
		message = "Incorrect code."
	}

	const [imageSrc, setImageSrc] = useState(null);
	useEffect(() => {
		import(`../images/${checkType}-check.svg`)
			.then((image) => setImageSrc(image.default))
			.catch((error) => console.error("Image loading error:", error));
	}, [checkType]);

	return (
		<div className="message-container">
			<p className="message">{message}</p>
			<img src={imageSrc} className="check" alt="image"/>
		</div>
	)
}
