import React from "react"
import {nanoid} from "nanoid"
import "./style.scss"
import festivalData from "./data/festivalData"
import BuyTickets from "./components/BuyTickets"
import Footer from "./components/Footer"
import PosterSection from "./components/PosterSection"

export default function App() {

	return (
		<div className="challenge_33">
			<div className="wrapper">
				<h1>ScrimbaFest</h1>

				<PosterSection date="July 1" festivalData={festivalData}/>

				<PosterSection date="July 2" festivalData={festivalData}/>

				<PosterSection date="July 3" festivalData={festivalData}/>

				<BuyTickets />
				<Footer />

			</div>
		</div>
	)
}
