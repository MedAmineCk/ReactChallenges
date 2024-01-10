import React from "react"
import "./style.scss"
import ResultsModal from "./components/ResultsModal"
import EmojiLists from "./components/EmojiLists"
import emojis from "./data/emojis"
import {nanoid} from "nanoid"

export default function App() {
    const [likedEmojis, setLikedEmojis] = React.useState([])
    const [passedEmojis, setPassedEmojis] = React.useState([])
    const [currentEmojis, setCurrentEmojis] = React.useState(getRandomEmojis)
    const [showResults, setShowResults] = React.useState(false)
    const [resultsReady, setResultsReady] = React.useState(false)

    function handleClick(event) {
        const clickedEmoji = event.target.textContent
        const unClickedEmojis = currentEmojis.filter(emoji => emoji !== clickedEmoji)
        setLikedEmojis(prev => [...prev, clickedEmoji])
        setPassedEmojis(prev => [...prev, ...unClickedEmojis])
        setCurrentEmojis(getRandomEmojis)
    }

    /* Challenge

        The handleClick function above needs to be completed for the app to work. The function should do three things when it is invoked by the user clicking on one of the buttons (lines 84 to 92):

            1. The emoji that the user has clicked on should be added to the end of the likedEmojis
               state array*.

            2. The emojis that the user didn't click on should be added to the end of the
               passedEmojis state array*.

            3. The currentEmojis state should be set to the return value of the getRandomEmojis
               function.

            4. If you complete these tasks correctly, the emojis should be sent to their respective
               columns when you click on one of them, and the counter at the top should increment until you reach 10, at which point the test results will be revealed.

            5. You should only write code inside the handleClick function above! Nothing else needs to
               be added or changed anywhere in the project.

        * In other words, this state should be updated, and it should be updated in such a way that its
          new value is an array of all of the previously added emojis (if there are any), followed by
          the newly added emoji(s).
    */

    function getRandomEmojis() {
        function chooseRandomEmoji() {
            return emojis[Math.floor(Math.random() * emojis.length)]
        }

        return new Array(3).fill("").map((item) => chooseRandomEmoji())
    }

    function getResults() {
        setShowResults(true)
    }

    function reset() {
        setLikedEmojis([])
        setPassedEmojis([])
        setShowResults(false)
        setResultsReady(false)
    }

    React.useEffect(() => {
        showResults &&
        setTimeout(() => {
            setResultsReady(true)
        }, 2000)
    }, [showResults])

    function generateListItems(element) {
        return <li key={nanoid()}>{element}</li>
    }

    return (
        <div className="challenge_31">
            <div className="wrapper">
                <div className="results-counter">{likedEmojis.length} / 10</div>

                <ResultsModal
                    showResults={showResults}
                    getResults={getResults}
                    resultsReady={resultsReady}
                    reset={reset}
                    generateListItems={generateListItems}
                    likedEmojis={likedEmojis}
                />

                <h1>Emoji Personality Test</h1>

                <div className="overall-emojis-container">
                    <button onClick={handleClick}>
                        {currentEmojis[0]}
                    </button>
                    <button onClick={handleClick}>
                        {currentEmojis[1]}
                    </button>
                    <button onClick={handleClick}>
                        {currentEmojis[2]}
                    </button>
                </div>

                <EmojiLists
                    likedEmojis={likedEmojis}
                    passedEmojis={passedEmojis}
                    generateListItems={generateListItems}
                />
            </div>
        </div>
    )
}
