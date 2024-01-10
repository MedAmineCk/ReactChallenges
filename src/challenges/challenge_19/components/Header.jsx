import React from "react"
import square_check_solid from "../images/square-check-solid.svg"

export default function Header() {
    return (
        <header>
            <div>
                <div className="header-icon-container">
                <img className="header-icon" src={square_check_solid}/>
                </div>
                <h1>AutoComplete</h1>
            </div>
            <h2>The Automated To-Do List</h2>
        </header>
    )
}