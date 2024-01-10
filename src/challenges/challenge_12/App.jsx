import React from "react"
import "./style.scss"
import wordsDataOne from "./data/wordsDataOne"
import wordsDataTwo from "./data/wordsDataTwo"
import Header from "./components/Header"
import Word from "./components/Word"
import NavButtons from "./components/NavButtons"
import Footer from "./components/Footer"

export default function App() {
    const [wordsDataArray, setWordsDataArray] = React.useState(wordsDataOne)
    const [currentWord, setCurrentWord] = React.useState(wordsDataArray[0])

    /* Challenge

        There are too many props in the two <NavButtons /> and one <Word /> elements below. Your task is to make this aspect of the code more concise and efficient as follows:

            1. There should be only one prop in each of the three elements (the two <NavButtons /> and
               the one <Word /> element). Each prop should preserve all of the data that is currently being passed into the element.

            2. The code of the NavButtons and Word components in the components folder should be
               modified to accommodate the changes in how the props are being passed into the elements. The modifications you need to make are *very* small!

            3. You should accomplish these tasks with a minimal amount of work. There isn't much you
               need to do to complete this challenge. If you find yourself doing a lot of tedious, repetitious work, it's a sign that you doing one of the tasks in an inefficient way!

        Note: The results won't necessarily be the "best" way of passing the props, and some aspects of how this challenge is set up are a bit contrived. This is just meant as an exercise in reducing the number of props you pass!
    */

    const navButtons = {
        wordsDataArray: wordsDataArray,
        currentWord: currentWord,
        setCurrentWord: setCurrentWord
    }

    const navButtonTop = {
        ...navButtons,
        position: "top"
    }

    const navButtonBottom = {
        ...navButtons,
        position: "bottom"
    }

    const word = {
        ...currentWord,
        array: wordsDataArray
    }

    return (
        <div className="challenge_12">
            <div className="wrapper">
                <Header/>

                <NavButtons {...navButtonTop}/>

                <Word {...word}/>

                <NavButtons {...navButtonBottom}/>

                <Footer/>
            </div>
        </div>
    )
}
