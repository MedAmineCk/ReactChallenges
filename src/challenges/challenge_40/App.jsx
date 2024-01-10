import React, {useEffect} from "react"
import "./style.scss"
import useSound from "use-sound"
import PlayArea from "./components/PlayArea"
import ScoreBoard from "./components/ScoreBoard"

export default function App() {

    const STARTING_TIME = 60
    const STARTING_SCORE = 0
    const [timerRunning, setTimerRunning] = React.useState(false)
    const [timeLeft, setTimeLeft] = React.useState(STARTING_TIME)
    const [score, setScore] = React.useState(STARTING_SCORE)
    const [playSong] = useSound("../audio/song.mp3")
    const [playClick] = useSound("../audio/click.mp3", {volume: .45})

    /* Challenge

        The app's core gameplay components are already in place, but the start button and timer are unfinished. Your task is to finish setting them up to get the game working!

            1. When the user clicks on the start button...
                - the timer starts counting down seconds.
                - the class of "fade-in" is replaced with "fade-out" in the start ("play") button's
                  classList.
                - the start button is disabled.
                - the song and click sound get played by invoking playSong() and playClick().

            2. At 0 seconds, the timer stops, and "fade-out" gets replaced with "fade-in" in
               the start button's classList.

            3. If the player then clicks the start button again, the timer gets reset to 60 seconds and
               the score gets reset to 0, and everything listed in task 1 happens again.

            4. To accomplish these tasks, you *only* need to write code below these comments; you
                *don't* need to change or add anything above them or in a different file!
    */

    const startGame = () => {
        resetGame()
        setTimerRunning(true)
        // playClick()
        // playSong()
    }

    const resetGame = () => {
        setTimeLeft(STARTING_TIME)
        setScore(STARTING_SCORE)
    }

    if (timeLeft === 0 && timerRunning) {
        setTimerRunning(false)
    }

    useEffect(() => {
        let intervalId
        if (timerRunning) {
            intervalId = setInterval(() => {
                return setTimeLeft(prevState => prevState - 1)
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [timerRunning]);



    return (
        <div className="challenge_40">
            <div>
                <ScoreBoard data={{score, timeLeft}}/>
                <PlayArea playProps={{timeLeft, timerRunning, setScore}}/>
                <button className={`play-button ${timerRunning ? 'fade-out' : 'fade-in'} `}
                        onClick={startGame}
                        disabled={timerRunning}
                >Play
                </button>
            </div>
        </div>
    )
}