import React from "react"
import savedArticles from "../data/savedArticles"
import bookmark from "../images/icons/book-bookmark-solid.svg"
import searchIcon from "../images/icons/search.svg"

export default function Header({stats, setArticleQueue}) {
    
    const [userInput, setUserInput] = React.useState("")
    
    function handleChange(e){
        const newInput = e.target.value
        setUserInput(newInput)
        setArticleQueue(queuedArticles.filter(article => {
            return article.title.toLowerCase().includes(newInput.toLowerCase())}))
    }
    
    return (
        <header>
            <div className="header-top-container">
                <img src={bookmark}/>
                <h1>Read-Me-Later</h1>
            </div>
            <div className="header-bottom-container">
                <div className="header-button-container">
                    <button className="favorites">
                        {stats.numOfFavorites}
                    </button>
                    <button className="archived">
                        {stats.numOfArchived}
                    </button>
                    <button className="trash">
                         {stats.numOfTrashed}
                    </button>
                </div>
                <div className="search-container">
                    <img src={searchIcon}/>
                    <input value={userInput} onChange={handleChange}/>
                </div>
            </div>
        </header>
    )
}