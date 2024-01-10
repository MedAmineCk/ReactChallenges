import React, {useEffect} from "react"

export default function Clock(props) {

    const [time, setTime] = React.useState(getTime)

    function getTime() {
        return new Date()
    }

    /* Challenge

        The clock currently doesn't update the time while it's open. Your task is to fix this as follows:

            1. The clock should periodically update its data for the state called "time", so that it
               accurately reflects the seconds as they transpire. You should use the getTime function to obtain updated values for the state.

            2. Once the clock is running, you should test it by clicking the "x" button in the top-left
               corner of the clock and then clicking on the clock icon multiple times, to simulate opening and closing the app multiple times.

            3. While you complete step 2, the counter in the top-left of the screen should never go
               beyond 1 when you open the clock in the simulated iPhone, and it should go back to 0 when you close the clock. If that's not the case, there's something you forgot to do and must fix to optimize your code!

        Note: You don't need to change or add any code above or below the lines below. If you update
        the data correctly, the code below the bottom line will automatically parse and display it, so there's nothing else you need to do to complete the challenge!  */

    /* ------------- Write your code below! ---------------------------------------*/

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime)
        }, 200)
        return () => clearInterval(interval)
    }, []);


    /* ------------- Write your code above! -------------------------------------*/

    const dayName = time.toLocaleString([], {weekday: "long"})
    const dayNumber = time.getDate()
    const month = time.toLocaleString([], {month: "long"})
    const year = time.getFullYear()
    const clockTime = time.toLocaleString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h12"
    })

    return (
        <div className="Clock">
            <button
                className="close-button"
                name="Clock"
                onClick={props.toggleClock}
            ></button>
            <div className="date-info">
                <p>{dayName},</p>
                <p>September {dayNumber}</p>
            </div>
            <div className="time-info">{clockTime}</div>
        </div>
    )
}
