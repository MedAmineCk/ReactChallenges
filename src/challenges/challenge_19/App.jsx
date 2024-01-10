import React from "react"
import "./style.scss"
import ToDoList from "./components/ToDoList"
import BottomBar from "./components/BottomBar"
import Header from "./components/Header"

export default function App() {
    
  return (
    <div className="challenge_19">
        <div className="wrapper">
            <Header />
            <ToDoList />
            <BottomBar />
        </div>
    </div>
  )
}