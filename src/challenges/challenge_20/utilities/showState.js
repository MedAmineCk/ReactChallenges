export default function showState(currentData) {
        
    const bgImage = stringify(currentData.image.wrapperStyles.backgroundImage)
    const quote = currentData.text.fakeQuote
    const source = currentData.text.fakeSource
    const bgPos = stringify(currentData.image.wrapperStyles.backgroundPositionX)
    const color = stringify(currentData.image.containerStyles.color)
    const width = stringify(currentData.image.containerStyles.width)
    const padding = stringify(currentData.image.containerStyles.padding)
    const textShadow = stringify(currentData.image.containerStyles.textShadow)     
    const iFont = stringify(currentData.image.quoteFontSize.fontSize)
    const qFont = stringify(currentData.text.quoteFontSize.fontSize)
          
    function stringify(value) {
        return typeof value === "string" ? `"${value}"` : value
    }

    console.log(" ‎ ‎ ")
    console.log("currentData = {")
    console.log(" ‎ ‎ ")
    console.log("‎ ‎ ‎‎ image: {")  
    console.log(" ‎ ‎ ‎ ‎  ‎ ‎ ‎ wrapperStyles: {")
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ backgroundImage: ${bgImage},`)
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ backgroundPositionX: ${bgPos}`)
    console.log(" ‎ ‎ ‎   ‎‎ ‎ ‎ },")
    console.log(" ‎ ‎ ‎  ‎  ‎‎ ‎ containerStyles: {")
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ color: ${color},`)
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ width: ${width},`)
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ padding: ${padding},`)
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ textShadow: ${textShadow}`)
    console.log(" ‎ ‎ ‎  ‎  ‎‎ ‎ },")
    console.log(" ‎ ‎ ‎  ‎ ‎ ‎ quoteFontSize: {")
    console.log(`‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ fontSize: ${iFont}`)
    console.log(" ‎ ‎ ‎  ‎ ‎ ‎ }")
    console.log("‎ ‎ ‎‎ },")  
    console.log(" ‎ ‎ ")
       
    console.log("‎ ‎ ‎ text: {")    
    console.log(` ‎ ‎ ‎ ‎  ‎ ‎  fakeQuote: "${quote}",`)   
    console.log(` ‎ ‎ ‎ ‎  ‎ ‎‎ fakeSource: "${source}",`)   
    console.log(" ‎ ‎ ‎‎ ‎ ‎ ‎ ‎quoteFontSize: {")
    console.log(`‎ ‎ ‎   ‎   ‎‎ ‎ ‎  ‎ ‎ ‎fontSize: ${qFont}`)
    console.log(" ‎ ‎ ‎  ‎ ‎ ‎ }")
    console.log("‎ ‎ ‎‎ }") 
    console.log("‎}")  
}