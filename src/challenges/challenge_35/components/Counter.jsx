import React from "react"
import timeEventsManager from "time-events-manager"

export default function Counter(props) {
    const [numberOfThings, setNumberOfThings] = React.useState(
        timeEventsManager.intervalCollection._intervalCollection.length ||
            timeEventsManager.timeoutCollection._timeoutCollection.length - 1
    )

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setNumberOfThings(
                timeEventsManager.intervalCollection._intervalCollection
                    .length ||
                    timeEventsManager.timeoutCollection._timeoutCollection
                        .length - 1
            )
        }, 50)
        return () => {
            clearTimeout(timeout)
        }
    }, [props.displayClock])

    return (
        <div
            className={`counter-container ${
                numberOfThings <= 1 ? "green" : "red"
            }`}
        >
            <h2>Counter:</h2>
            <p>{numberOfThings}</p>
        </div>
    )
}
