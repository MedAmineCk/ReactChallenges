import convertToTitleCase from "./convertToTitleCase"

export default function generateMessage(userData){
    console.log(
        `A legally-responsible person with the user ID of ${userData.userId} at IP address ${userData.location.ip} in ${userData.location.city}, ${userData.location.country} requested a download of the file with the ID of ${userData.requestedFileId} at ${userData.downloadTimeStamp}, using ${convertToTitleCase(userData.browser.name)} ${userData.browser.type} version ${userData.browser.version} on ${userData.browser.os}.`
	)
}