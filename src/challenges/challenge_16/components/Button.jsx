import React from "react"
import getArticles from "../utilities/getArticles"

export default function Button({setCurrentArticles, numOfArticles}) {
    return (
        <div className="button-container">
			<button onClick={() => setCurrentArticles(getArticles(numOfArticles))}>
				<span className="button-emoji">😲</span>
				<span className="now">Now!</span>
				<span className="get">Get New Articles</span>
			</button>
		</div>
        
    )

}