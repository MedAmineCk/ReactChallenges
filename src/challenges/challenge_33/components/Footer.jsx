import React from "react"

export default function footer() {
    
	const [taskComplete, setTaskComplete] = React.useState(false)

	React.useEffect(() => {
		const containers = [...document.querySelectorAll(".lineup-container")]

		const testCondition =
			containers.length === 3 &&
			containers[0].childNodes[1] &&
			containers[1].childNodes[1] &&
			containers[2].childNodes[1] &&
			containers[0].childNodes[1].textContent === "Youth Dimension" &&
			containers[1].childNodes[1].textContent === "The Burning Snowflakes" &&
			containers[2].childNodes[1].textContent === "The Compass Sisters"

		if (testCondition) {
			setTaskComplete((prev) => true)
		}
	}, [])

	if (taskComplete) {
		return (
			<footer>
				Not a real festival. All band names were created with the help of a fake band name generator, and they're presumably fake, although some of them should be real.   
			</footer>
		)
	} else {
		return null
	}
}
