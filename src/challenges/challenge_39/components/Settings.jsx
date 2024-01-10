import React from "react"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"

export default function Settings(props) { 
         
    const {
		playbackRate, setPlaybackRate,
		volume, setVolume,
		loop, setLoop,
		loopingNotes, setLoopingNotes,
        currentInstrument, setCurrentInstrument,
		showKeys, setShowKeys
	} = props 
    
    const leftPanelBundle = {
        currentInstrument, setCurrentInstrument,
		showKeys, setShowKeys, volume 
    }    
    
    const rightPanelBundle = {
		playbackRate, setPlaybackRate,
		volume, setVolume,
		loop, setLoop,
		loopingNotes, setLoopingNotes,
	} 
    
    return (
        <div className="settings-container">
            <LeftPanel {...leftPanelBundle} />
            <RightPanel {...rightPanelBundle}/>
        </div>
    )
}