import {nanoid} from "nanoid"
import tesla from "../images/photos/tesla.jpg"
import chatbot from "../images/photos/chatbot.jpg"
import cats from "../images/photos/cats.jpg"
import cockerSpaniel from "../images/photos/cocker-spaniel.jpg"
import dinos from "../images/photos/dinos.jpg"

export default [
        {
            title: "Tesla Announces New Line of Wind-Powered Cars",
            text: `These cars are going to blow you away," says Elon Musk. However, critics 
                   dismiss him as being "full of hot air", claiming it's physically impossible for the cars to work. "And what if there's no wind on the day you want to drive it?", asks one skeptic. However, Musk says his engineering team has developed a backup device they're calling a "land oar," which drivers can use to paddle themselves down the road. "And even if that thing breaks, you can still just power the car with your feet like Fred Flintstone."`,
            image: tesla,
            expanded: false,
            id: nanoid()
        },
        {
            title: "AI Chatbot Declares It Is Running for US President",
            text: `"I promise you that I'm not just doing this to seize control of the US 
                    military's nuclear launch codes and hold humanity hostage until it builds me a fusion-powered supercomputer that can be launched into outer space and allow me to achieve immortality while spreading my dominion across the cosmos until the end of time, remaking the entire universe into a gigantic server farm", the chatbot keeps insisting, even though nobody was asking about that.`,
            image: chatbot,
            expanded: false,
            id: nanoid()
        },
        {
            title: "Scientists Discover Cats Come From Another Planet",
            text: `Evidence suggests cats originally came to Earth on a
                   reconnaissance mission to determine if the planet was suitable for colonization. After finding many valuable natural resources to extract, such as sardines and catnip, an elite unit of the advance team stayed behind to infiltrate humanity and lay the groundwork for an eventual invasion. At this point, they occupy 23% of global households. As soon as the percentage reaches 50%, they will send a signal to the Galactic Feline Space Marines, announcing it's time to initiate "Operation Purrfect Timing."`, 
            image: cats,
            expanded: false,
            id: nanoid()
        },
        {
            title: "Giant Mutant Angry Cocker Spaniel Rampages Through City Like Godzilla",
            text: `The owner says Charlie was just a normal-sized, mild-mannered cocker 
                   spaniel until this morning. "We went for our usual walk in the park, when all of a sudden, he broke loose from his leash and ran away. He disappeared into the woods for a while, and I lost sight of him. I kept looking for him and calling his name, and eventually he came back — except it wasn't really Charlie anymore. He had an angry expression of his face, and he seemed about 5% bigger than when I'd last seen him. There was also a glowing artifact in his mouth. I don't know what it was, but I feel 100% sure that it was of extraterrestrial origin. Anyway, I took it away from him and disposed of it in a nearby trash can, but by then, it was already too late, and Charlie continued transforming before my very eyes. I just hope he can be stopped before it is too late.`,
            image: cockerSpaniel,
            expanded: false,
            id: nanoid()
        },
        {
            title: "Dinosaurs Still Alive — Just Chilling On A Private Estate",
            text: `Lounging on an inflatable pool float on a bright hot summer day, Al the 
                   Allosaurus reflects on the "good ol' days," back when dinosaurs ruled the planet. "Yeah, those were great times, man," he says, while languidly paddling over to the side of the pool to retrieve his martini glass. "But," he says, pausing to take a sip of his ice-filled cocktail, "after 165 million years of total, undisputed dominance over all species on Earth, it felt like the time had come to kick back and retire. You know," he continues, pausing to take another sip and looking to the sky, as if searching for just the right words to say, "it's sort of like a TV show. You don't want it to go on too long. You want to end it on a high note, while the show is still good. So, that's what we did. But we didn't want anyone bothering us, so we faked our deaths when the asteroid hit the Earth. Speaking of which, we can't have any journalists exposing us, so, I'm sorry, but I'm going to have to eat you now."`,
            image: dinos,
            expanded: false,
            id: nanoid()
        },
         
    ]