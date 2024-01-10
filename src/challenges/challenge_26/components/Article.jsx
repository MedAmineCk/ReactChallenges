import React from "react"
import favoritedArticles from "../data/favoritedArticles"

export default function Article(props) {
    
    const extraFavClass = favoritedArticles.find(article => article.id === props.articleData.id) ? 
        "favorited" : undefined
        
        return (
            <div key={props.articleData.id} className="article-container">
            
                <h3>{props.articleData.title}</h3>
                                
                <img src={props.articleData.image} />
                
                <div className={`article-text-container ${props.articleData.expanded ? "expanded" :  "minimized"}`}>
                    <p>{props.articleData.text}</p>
                </div>
                
                <button
                    className="read-more-button"
                    data-button-type="toggleExpand"
                    data-article-id={props.articleData.id}
                >
                    {props.articleData.expanded ? "Minimize" : "Read More"}
                </button>

                <div className="article-buttons-container" > 
                
                    <button 
                        className= {`add-to-favorites-button ${extraFavClass}`}
                        data-button-type="favorite"
                        data-article-id={props.articleData.id}
                    >
                    </button>
                    
                    <button 
                        className="add-to-archive-button"
                        data-button-type="archive"
                        data-article-id={props.articleData.id}
                    >
                    </button>
                    
                    <button 
                        className="add-to-trash-button"
                        data-button-type="trash"
                        data-article-id={props.articleData.id}
                    >
                    </button>
                    
                </div>
            </div>
        )

}