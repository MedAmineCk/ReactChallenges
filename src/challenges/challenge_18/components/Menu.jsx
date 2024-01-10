import React from "react"
import goals from "../images/goals.svg"
import todolist from "../images/to-do-list.svg"
import monthlyReport from "../images/monthly-report.svg"
import setting from "../images/settings.svg"
import highlights from "../images/highlights.svg"
import newEntry from "../images/new-entry.svg"

export default function Menu(props) {
    
    function scrollDown() {
        window.scrollTo({
            top: (window.innerHeight * 2),
            behavior: "smooth",
        })
    }
    
    React.useEffect(() => {
        if (props.skip) scrollDown()
    }, [])
    
    return (
        <div className="menu-wrapper">
            <div className="header-text-container">
              <h1>Life Tracker</h1>
            </div>
            <div className="main-menu-container">
                <button className="menu-item-button">
                    <img className="menu-icon" src={goals}/>
                <p>Goals</p>
                </button>
                <button className="menu-item-button">
                     <img className="menu-icon" src={todolist}/>
                     <p>To Do List</p>
                </button>
                <button className="menu-item-button" onClick={scrollDown}>
                    <img className="menu-icon" src={monthlyReport}/>
                    <p>Reports</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon" src={setting}/>
                    <p>Settings</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon highlights" src={highlights}/>
                    <p>Highlights</p>
                </button>     
                <button className="menu-item-button">
                    <img className="menu-icon" src={newEntry}/>
                    <p>New Entry</p>
                </button>    
            </div>  
      </div>
    )
}