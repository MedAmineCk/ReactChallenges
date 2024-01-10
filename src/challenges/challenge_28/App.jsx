import React, {useEffect} from "react"
import "./style.scss"
import Header from "./components/Header"
import ActivityCard from "./components/ActivityCard"
import placeHolderData from "./data/placeHolderData"

export default function App() {

    /* Challenge

        The user's activities have been saved as keys for the Bored API. Your task is to use the keys to get the activities data as follows:

            1. When the page loads, activity data should be fetched from the Bored API for each of the
               20 keys in the savedActivityKeys array below. Read the API_Documentation.md file to learn how to complete these fetches.

            2. The data should be saved as a series of 20 JavaScript objects (one for each
               key/response/activity) in the activities state array.

            3. Get rid of the placeHolderData that is currently set as the activitiesData state. This
               data is just meant to give you an idea of the content, format, and utility of the real data. You should end up with 20 activity cards with real data from the API on them.

        Note: All you need to do is set the activitiesData state in the way described above. If you do this correctly, the activityCardElements variable on line 33 below will take care of rendering the activity cards for you.
    */

    const savedActivityKeys = [
        8364626, 4688012, 6553978, 3699502, 9908721, 3136729, 5490351,
        8827573, 9318514, 1668223, 3192099, 9008639, 4894697, 8033599, 5675880,
        7114122, 4151544, 4558850, 3561421, 4286250
    ]

    const [activitiesData, setActivitiesData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    const activityCardElements = activitiesData.map((activityData, index) => (
        <ActivityCard key={activityData.key} number={index + 1} {...activityData} />
    ))

    useEffect(() => {
        const fetchPromises = savedActivityKeys.map(key =>
            fetch("https://apis.scrimba.com/bored/api/activity?key=" + key)
                .then(response => {
                    if (!response.ok)
                        throw new Error("Network response was not ok!")
                    return response.json()
                })
                .catch(error => {
                    console.error("there was a problem with a fetch request: ", error)
                })
        )
        Promise.all(fetchPromises)
            .then(results => {
                console.log('All fetches complete:', results);
                setActivitiesData(results)
                setIsLoading(false)

            })
            .catch(error => {
                console.error('Error with Promise.all():', error);
            })
    }, []);

    /*React.useEffect(() => {
        async function getActivities() {
            const responses = await Promise.all(savedActivityKeys.map(key => {
                return fetch(`https://apis.scrimba.com/bored/api/activity?key=${key}`)
            }))
            const data = await Promise.all(responses.map(response => response.json()))
            setActivitiesData(data)
            setIsLoading(false)
        }
        getActivities()
    }, [])*/

    return (
        <div className="challenge_28">
            <div className="wrapper">
                <Header/>
                <div className="container">
                    {isLoading ? <h1>is Loading ...</h1> : activityCardElements}
                </div>
            </div>
        </div>
    )
}
