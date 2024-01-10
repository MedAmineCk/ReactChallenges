import { nanoid } from "nanoid"
import "./style.scss"
import colorData from "./data/colorData"
import Header from "./components/Header"

export default function App() {
	
/* Challenge

	Frontend Magazine needs you to show their readers the top 100 colors in front-end development! Your task is to render them as follows: 
	
		1. For each of the 100 hex code colors in the colorData array, there should be a ColorCard 
		   element in the space marked below. The colors are already ranked, so the order of the elements should match the order of the colors in the array. 
		   
		2. The hard-coded information in the colorData component should be replaced with data 
		   passed in via props. 
		   
		3. If you complete these tasks correctly, you should see 100 color cards below the "Top 100 
		   Colors" header. Each color should show the corresponding color's rank number, hex code, and the actual color itself in the background! 
		   
		Note: colorData, and nanoid have already been imported into this file! 
*/

	function ColorCard({color, index}) {
		return (
			<div className="color-card" style={{ background: color }}>
				<p>
					<span>{index}.</span> {color}
				</p>
			</div>
		)
	}
	
	return (
		<div className="challenge_10">
			<div className="wrapper">
				<Header />

				{/*------Your ColorCard elements below!-----------*/}

				{colorData.map((color, index) => <ColorCard color={color} index={index} key={nanoid()}/>)}

				{/*------Your ColorCard elements above!-----------*/}

			</div>
		</div>
	)
}
