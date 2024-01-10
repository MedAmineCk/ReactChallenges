import React from "react" 

export default function Header({time}) {
    
    const mainMessage = "How Strong Are You"
    let messageToShow
    
    switch(true) {
         case time >= 30:
            messageToShow = "Gone."
            break;
        case time >= 25:
            messageToShow = "Still dead."
            break;
         case time >= 17:
            messageToShow = "Dead."
            break;
        case time >= 13:
            messageToShow = "I can't."
            break;
         case time >= 12:
            messageToShow = "So strong. "
            break;
        case time >= 11:
            messageToShow = "OMG. OMG."
            break;
        case time >= 10:
            messageToShow = "OMG."
            break;
        case time >= 8:
            messageToShow = "Amazing!"
            break;
        case time >= 6:
            messageToShow = "Oh wow!"
            break;
        case time >= 4:
            messageToShow = "Oh!"
            break;
        case time >= 2:
            messageToShow = "Yawn."
            break;
        case time > 0:
            messageToShow = "Weak."
            break;
        default:
            messageToShow = mainMessage + "?"
    }
    
    return (
        <h1>{messageToShow}</h1>
    )
}