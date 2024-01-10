import {nanoid} from "nanoid"
import img1 from "./images/robot.jpg"
import img2 from "./images/code.jpg"
import profile from "./images/profilePic.jpg"

export default {
  comments: [
    {
      id: nanoid(),
      userName: "TomTheTechEnthusiast",
      isAnonymous: false,
      commentText:
        "I think AI like ChatGPT will revolutionize the economy, society, and our lives for the     better. It will accelerate scientific research, amplify our creative powers, and make our  labor more productive."
    },
    {
      id: nanoid(),
      userName: "SallyTheTechSkeptic",
      isAnonymous: true,
      commentText:
        "I agree they will revolutionize all of those things — but not for the better. They will    empower the companies that control them, and disempower the people they put out of work."
    },
    {
      id: nanoid(),
      userName: "AnnaTheTechAgnostic",
      isAnonymous: false,
      commentText:
        "I'm not sure where I stand, because right now, the tech still seems like a gimmick. I think we're orders of magnitude away from the kind of 'revolutionary' changes that both its defenders and critics have in mind."
    }
  ],
  image1: img1,
  image2: img2,
  mainQuestion: "ChatGPT: Good or Bad?",
  metaData: {
    userName: "SamTheTechThinker",
    profilePic: profile,
    timeOfPost: new Date().toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    filedUnder: "Society & Technology",
    views: 1132
  },
  subQuestions: [
    {
      text: "Is it a step toward achieving Moore's Law for Everything?",
      link: "https://moores.samaltman.com/"
    },
    {
      text: "Is it a dead-end for AI research?",
      link: "https://nautil.us/deep-learning-is-hitting-a-wall-238440/"
    },
    {
      text: "Is it the shape of things to come?",
      link:
        "https://english.elpais.com/science-tech/2023-01-31/chatgpt-is-just-the-beginning-artificial-intelligence-is-ready-to-transform-the-world.html"
    },
    {
      text: "Is it a stochastic parrot?",
      link: "https://dl.acm.org/doi/pdf/10.1145/3442188.3445922"
    },
    {
      text: "Will it lead to unemployment?",
      link:
        "https://www.cnet.com/science/chatgpt-is-a-stunning-ai-but-human-jobs-are-safe-for-now/"
    },
    {
      text: "Should organizations ban it, like Stack Overflow did?",
      link:
        "https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned"
    }
  ]
}