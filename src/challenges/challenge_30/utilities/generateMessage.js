export default function generateMessage(userData) {
    console.log(`User took ${(userData.entranceTime - userData.pageLoadTime)/1000} seconds to enter the site, and they clicked the button at coordinates ${userData.clickCoordinates.offsetX}, ${userData.clickCoordinates.offsetY}. `)
}