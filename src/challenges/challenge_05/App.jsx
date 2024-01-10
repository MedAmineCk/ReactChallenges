import React from "react"
import TopSection from "./components/TopSection"
import BottomSection from "./components/BottomSection"
import "./style.scss"

export default function App() {
    const [playerName, setPlayerName] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        setPlayerName(prevName => prevName.trim() + " The Magnificent!")
    }

    /* Challenge

        The hero of this RPG needs a name! Your task is to set up an input element as follows:

            1. The input should be in the space marked below and have the following characteristics:
                  - Class name: "name-input"
                  - Type: "text."
                  - Maximum length: 16 characters.
                  - Placeholder text: "Enter Your Character's Name".
                  - Required: yes
                  - Disabled: yes if form has been submitted (see code on lines 7-11).

            2. The current value of playerName should be the current string the user has typed into the
               input. Whenever the user's input changes, the state should be updated.

            3. The input should be controlled. Its value should be controlled by the playerName state.

            4. You should only write your code below. Nothing needs to be changed or added elsewhere!
               If you complete these tasks correctly, you should receive a hero's name after you type
               in your character's name and click "Continue"!
    */

    return (
        <div className="challenge_05">
            <form className="form" onSubmit={handleSubmit}>
                <TopSection submitted={submitted}/>

                {/*-----Your input below!----------*/}

                <input type="text"
                       className="name-input"
                       maxLength="16"
                       placeholder="Enter Your Character's Name"
                       required
                       disabled={submitted && true}
                       value={playerName}
                       onChange={(e)=> setPlayerName(e.target.value)}
                />

                {/*-----Your input above!----------*/}

                <BottomSection submitted={submitted} playerName={playerName}/>
            </form>
        </div>
    )
}
