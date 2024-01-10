import React from "react"
import "./style.scss"
import showState from "./utilities/showState"
import NextQuoteButton from "./components/NextQuoteButton"
import imageData from "./data/imageData"
import quoteData from "./data/quoteData"

export default function App() {
        
    const [currentData, setCurrentData] = React.useState(getNextData)
    
    function getNextData() {
        return {
            text: getRandomItem(quoteData),
            image: getRandomItem(imageData)
        }
    }
    
    function getRandomItem(targetObject) {
        checkArray(targetObject)
        const targetArray = targetObject.availableItems
        const length = targetArray.length
        const randomIndex = Math.floor(Math.random() * length)
        const targetItem = targetArray[randomIndex]
        targetArray.splice(randomIndex, 1)
        targetObject.usedItems.push(targetItem)
        return targetItem
    }
    
    function getNextQuote() {
        setCurrentData(getNextData)
    }
    
    function checkArray(targetObject) {
        if (targetObject.availableItems.length === 0) {
            targetObject.availableItems = [...targetObject.usedItems]
            targetObject.usedItems = []
        }
    }        
    
/* How to use the getSmallestFontSize function:
    
        The data about font sizes are stored as strings: e.g., "30px" and "20px". If you feed two objects with such data into this function as arguments, it will return the object with the smallest font. The function doesn't care if either or both values are undefined. It can handle any of these situations! For example:
        
            const fontSizeOne = {fontSize: "30px"}
            const fontSizeTwo = {fontSize: "20px"}
            getSmallestFontSize(fontSizeOne, fontSizeTwo) //returns {fontSize: "20px"}. 
        
            ------
      
            const fontSizeThree = {fontSize: "25px"}
            const fontSizeFour = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour) //returns {fontSize: "25px"}. 
            
            ------

            const fontSizeFive = undefined
            const fontSizeSix = undefined 
            getSmallestFontSize(fontSizeThree, fontSizeFour)  //returns undefined  
*/

    function getSmallestFontSize(fontObjectOne, fontObjectTwo) {
        
        const fontSizeOneString = fontObjectOne && fontObjectOne.fontSize
        const fontSizeTwoString = fontObjectTwo && fontObjectTwo.fontSize
        
        if (!fontSizeOneString && !fontSizeTwoString) {
            return undefined
        } else if (fontSizeOneString && !fontSizeTwoString) {
            return fontObjectOne
        } else if (!fontSizeOneString && fontSizeTwoString) {
            return fontObjectTwo             
        }
        
        const fontSizeOneNum = getNumber(fontSizeOneString)
        const fontSizeTwoNum = getNumber(fontSizeTwoString)
        
        function getNumber(fontSizeString) {
            return +fontSizeString.slice(0, -2)
        }
        
        return fontSizeOneNum < fontSizeTwoNum ? fontObjectOne : fontObjectTwo   
    }
      
/* Challenge 
        
    The styles for the current pair of image and text are nested within the currentData state, but they aren't being applied to their respective JSX elements. Your task is to fix this as follows:
        
        1. The wrapperStyles in the currentData's image object should be applied to the <div> 
           with the className "wrapper".
         
        2. The containerStyles in the currentData's image object should be applied to the <div> 
           with the className "quote-container". 
        
        3. Either currentData's image.quoteFontSize or text.quoteFontSize — whichever one (if any) 
           contains the smallest font size — should be applied to the <p> with the className of "quote". To do this, you may use the getSmallestFontSize() function on line 61 of this file. See the comment above the function for info on how to use it. 
        
    Tip: Invoke showState(currentData) anywhere in the top level of this component to see the currentData state and familiarize yourself with its content and structure. 
*/

    const fontSizeOne = currentData.image.quoteFontSize
    const fontSizeTwo = currentData.text.quoteFontSize
    const fontSize = getSmallestFontSize(fontSizeOne, fontSizeTwo)

    return (
        <div className="challenge_20">
            <div className="wrapper" style={currentData.image.wrapperStyles}>
                <div className="quote-container" style={currentData.image.containerStyles}>
                    <p className="quote" style={fontSize}>
                        {currentData.text.fakeQuote}
                        <span className="source">-{currentData.text.fakeSource}</span>
                    </p>
                </div>
                <NextQuoteButton clickHandler={getNextQuote} />
            </div>
        </div>
    )
}