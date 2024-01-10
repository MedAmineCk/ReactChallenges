import React from "react"
import wikipedia from "../images/wikipedia-w.svg"

export default function Header() {
    return (
        <header>
		    <img src={wikipedia} />
			<h1>Weird Wikipedia Articles</h1>
		</header>
    )
}