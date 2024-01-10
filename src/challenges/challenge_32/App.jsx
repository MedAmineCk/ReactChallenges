import React from "react"
import "./style.scss"
import Header from "./components/Header"

export default function App() {

    const [userInput, setUserInput] = React.useState("")
    const [trackingReports, setTrackingReports] = React.useState([])

    const infractionMessage = "🚨🚨🚨 INFRACTION DETECTED! 🚨🚨🚨"

    if (trackingReports.length > 0) {
        console.log(trackingReports)
        if (trackingReports[trackingReports.length - 1].infractionDetected) {
            console.log(infractionMessage)
        }
    }

    function getTimeStamp() {
        const timeStamp = new Date()
        return (
            timeStamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }) +
            "." +
            (timeStamp.getMilliseconds() / 1000).toFixed(3).slice(-3)
        )
    }

    /* Challenge

    This company wants to spy on its employees. Your task is to help them do the following:

        1. Every time the user types in the textarea, the userInput and trackingReports states should
           both be updated.

                a. The value of userInput should be a string equaling whatever the user has typed in
                   the textarea (with one exception, discussed in task 2 below).

                b. For the trackingReports state array, any previously-existing objects in the array
                   should be preserved, and a new object should be added to the end of the array. This object should contain three properties:

                 Property		 	          Value
                    ╷----------------------╷-------------------------------------------╷
                    |  timeStamp           |  return value of getTimeStamp function    |
                    |----------------------|-------------------------------------------|
                    |  employeeInput       |  All of the current input in the textarea |
                    |----------------------|-------------------------------------------|
                    |  infractionDetected  |  If employeeInput contains the string     |
                    |                      |  "Evil Corp.", true — otherwise, false	   |
                    ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

        2. If the user writes the string "Evil Corp." (in title case), the string should automatically
           be replaced with "Good Corp." in both the userInput state and the textarea.

        3. Test out the app by writing "Evil Corp. test" in the textarea. If you complete these tasks
           correctly, you should get a console.log message every time you type a letter, and the messages should be like the ones in the sampleOutput.md file.

        4. You only need to write code below! None of the code above or elsewhere in the project should
           be changed.
    */

    const handleTyping = (event) => {
        const input = event.target.value;
        setUserInput(input);

        const isInfraction = input.includes('Evil Corp.');
        const updatedInput = isInfraction ? input.replace("Evil Corp", "Good Corp.") : input;

        setTrackingReports(prev => [
            ...prev,
            {
                timeStamp: getTimeStamp(),
                employeeInput: input,
                infractionDetected: isInfraction
            }
        ]);

        setUserInput(updatedInput);
    };


    return (
        <div className="challenge_32">
            <div>
                <Header/>
                <textarea placeholder="Write your report here..." onChange={handleTyping} value={userInput}/>
            </div>
        </div>
    )
}