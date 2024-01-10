import React from "react"

export default function ActivityCard(props) {
    return (
         <div className="activity-card">
        <div className="inner-card-container">
            <div className="frontSide">
                <p className="title">Option {props.number}</p>
            </div>
            <div className="backSide">
                <p className="activity">{props.activity}</p>
                <div className="stats-container">
                    <p><span>Type:</span> {props.type} </p>
                    <p><span>Participants:</span> {props.participants} </p>
                    <p><span>Accessibility:</span> {props.accessibility * 100} </p>
                    <p><span>Price:</span> {(props.price * 100).toFixed(0)} </p>
                </div>
            </div>
        </div>
    </div>
        
    )
    
    
}
