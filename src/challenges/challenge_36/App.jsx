import React from "react"
import "./style.scss"
import { nanoid } from "nanoid"
import examplePixels2 from "./examples/examplePixels2"

export default function App() {
        
	const INITIAL_STATE = new Array(3600)
        .fill("").map(item => ( 
            { id: nanoid(), filled: true }
        ))

	const [pixels, setPixels] = React.useState(examplePixels2)
	const [mouseDown, setMouseDown] = React.useState(false)
    const [wantsToDraw, setWantsToDraw] = React.useState(true)
    const [resetRequested, setResetRequested] = React.useState(false)
    
	function reset() {
        setResetRequested(true)
	}
    
    function togglePencil() {
        setWantsToDraw(!wantsToDraw)
    }

    React.useEffect(()=>{
        
        let timeOutOne
        let timeOutTwo
        
         if (resetRequested) {
            timeOutOne = setTimeout(()=>{
                setPixels(prevPixels => prevPixels.map(pixel => ({...pixel, filled: false}))
                )
            }, 1000)
         }
            
        if (resetRequested) {
            timeOutTwo = setTimeout(()=>{
                setResetRequested(false)
            }, 1001)
        }
        return () => {
            clearTimeout(timeOutOne)
            clearTimeout(timeOutTwo)
        }
    }, [resetRequested])
    
/* Challenge 
    
     1. If the user's cursor goes down or up anywhere inside the "wrapper" div, the "mouseDown"     
        state should be set to true or false, respectively. In other words:
     
              User's mouse button      mouseDown =
╷---------------------╷---------------------╷
  |       is down       |       true         |
|---------------------|---------------------|
|        is up        |       false        |
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
     
     2. If mouseDown is true and if the user's cursor enters any of the "pixel" divs, that div's 
        corresponding pixel data object in the pixels state array should have its "filled" property set to true if "wantsToDraw" is true and set to false if "wantsToDraw" is false. In other words, if mouseDown === true && the user's cursor enters the div corresponding to pixel[n],
     
                  wantsToDraw       pixel[n].filled
╷---------------------╷---------------------╷
  |       true          |       true         |
|---------------------|---------------------|
|       false         |       false        |
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
     
     3. All other properties of this and every other pixel data object should be preserved. In 
        other words, only the "filled" property of the particular pixel data object being targeted should be altered. Everything else should stay the same. 
        
    4. You should only add to the code below. Nothing else needs to be changed anywhere in this or 
       any other file!
*/

    const handleDraw = () => {
        setMouseDown(!mouseDown)
    }

    const handlePixelDraw = (event) => {
        if(mouseDown){
            pixels.find(pixel => pixel.id === event.target.id).filled = wantsToDraw
            setPixels([...pixels])
        }
    }

	const pixelElements = pixels.map((pixel) => (
		<div
			key={pixel.id}
            id={pixel.id}
			className={`pixel ${pixel.filled ? "filled" : "empty"}`}
            onMouseEnter={handlePixelDraw}
		></div>
	))

    return (
    	<div className="challenge_36">
            <div className="wrapper" onMouseDown={handleDraw} onMouseUp={handleDraw}>
                <div className={`sketch-o-matic-container ${resetRequested && "shake-horizontal"}`}>
                    <h1>Sketch-o-Matic</h1>
                    <div
                        className={`canvas ${wantsToDraw ? "draw" : "erase"} 
                               ${resetRequested && "fade-out"}`}
                    >
                        {pixelElements}
                    </div>
                    <div className="button-container">
                        <button onClick={reset}>Reset</button>
                        <button onClick={togglePencil}>{wantsToDraw ? "Erase" : "Draw"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}