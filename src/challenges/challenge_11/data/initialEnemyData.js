import { nanoid } from "nanoid"
import enemy1A from "../images/enemy1A.png"
import enemy2A from "../images/enemy2A.png"
import enemy3A from "../images/enemy3A.png"

export default [
	{
		id: nanoid(),
		currentImage: enemy1A,
		altImage: "./images/enemy1B.png",
		orientation: "left",
		position: {
			top: 210,
			left: 157,
		}
	},{
		id: nanoid(),
		currentImage: enemy2A,
		altImage: "./images/enemy2B.png",
		orientation: "right",
		position: {
			top: 105,
			left: 187,
		}
	},{
		id: nanoid(),
		currentImage: enemy3A,
		altImage: "./images/enemy3B.png",
		orientation: "right",
		position: {
			top: 165,
			left: 165,
		}
	},
]
