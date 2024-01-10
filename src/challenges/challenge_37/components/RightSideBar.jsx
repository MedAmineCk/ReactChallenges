import React from "react"
import {nanoid} from "nanoid"
import search from "../images/icons/search.svg"

export default function RightSideBar(){
    
    const debateElements = [
            "ChatGPT: Good or Bad?",
            "Dogs vs. Cats",
            "Vue vs. React",
            "Toilet Paper: Over or Under?",
            "CSS Grid vs. Flex",
            "T. Rex vs. Brontosaurus",
            "Semicolons in JS: Yes or No?"
        ].map(question => <button key={nanoid()}>{question}</button>)
    
    return (
        <div className="right-side-bar">
            <div className="right-side-bar-inner-container">
                <div className="search-container">
                    <img src={search}/>
                    <input/>
                </div>
                <h3>Trending Debates</h3>
                 {debateElements}
            </div>
        </div>
    )
}