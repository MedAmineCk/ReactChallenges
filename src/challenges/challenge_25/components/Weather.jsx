import React from "react";

export const Weather = ({currentData}) => {


    const emoji = currentData.condition === "Sunny" ? '☀️' : (currentData.condition === "Rainy") ? '🌧️' : '❄️'

    return (
        <div className="weather-container">
            <div className="icon">{emoji}</div>
            <div className="condition-text">{currentData.condition}</div>
            <div className="temp-range-container">
                <div className="low-temp-container">
                    <p className="low-temp-data">{currentData.lowTemp}°</p>
                    <p>Low</p>
                </div>
                <div className="high-temp-container">
                    <p className="high-temp-data">{currentData.highTemp}°</p>
                    <p>High</p>
                </div>
            </div>
            <div className="day">{currentData.day}</div>
        </div>
    )
}