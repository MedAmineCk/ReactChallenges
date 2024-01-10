import React from "react"
import reminder from "../images/reminder.svg"
import collaborator from "../images/add-collaborator.svg"
import palette from "../images/palette.svg"
import add from "../images/add-image.svg"
import more from "../images/more.svg"
import undo from "../images/undo.svg"
import redo from "../images/redo.svg"

export default function BottomBar() {
    return (
        <footer className="bottom-bar-container">
            <img className="icon" src={reminder}/>
            <img className="icon" src={collaborator}/>
            <img className="icon" src={palette}/>
            <img className="icon" src={add}/>
            <img className="icon" src={more}/>
            <div>
                <img className="icon" src={undo}/>
                <img className="icon" src={redo}/>
            </div>
        </footer>
    )
}