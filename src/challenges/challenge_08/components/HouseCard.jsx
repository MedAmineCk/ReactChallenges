import React from "react";

export const HouseCard = ({houseData,index,array}) => {
const propertyList = Object.keys(houseData).slice(2).map(key => {
    const valueOfProperty = houseData[key]
    const displayValue  = typeof valueOfProperty == "boolean" ? (valueOfProperty ? 'Yes' : 'No') : valueOfProperty;
    return (
        <li>
            <span>{key}:</span>
            {displayValue}
        </li>
    )
}
);
    return (
        <div className="house-card" key={houseData.id}>
            <p>
                Listing {index + 1} of {array.length}
            </p>
            <img src={houseData.image} alt="thumbnail"/>
            <div>
                <ul>{propertyList}</ul>
            </div>
        </div>
    )
}