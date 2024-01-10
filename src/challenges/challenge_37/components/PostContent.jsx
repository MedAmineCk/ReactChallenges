import React from "react"
import {nanoid} from "nanoid"
import dots from "../images/icons/dots.svg"

export default function PostContent(props){
    
    const {image1, image2, mainQuestion, metaData, subQuestions, comments} = props.data
    const {userName, timeOfPost, filedUnder, profilePic} = metaData

    const subQuestionElements = subQuestions.map(question => (
        <li key={nanoid()} className="sub-question">
          <a href={question.link} target="_blank">
            {question.text}{" "}
          </a>
        </li>
    ))

    return (
        <div>
            <div className="top-post-overall-container">
                 <div className="top-post-data-container">
                     <img className="profile-pic" src={profilePic}/>
                     <div className="user-and-category-container">
                         <p className="post-category"><a href="#">{filedUnder}</a></p>
                         <p className="post-username"><a href="#">@{userName}</a> </p>
                     </div>
                 </div>
                <img className="dots-icon" src={dots}/>
            </div>
            <h3 className="post-headline">{mainQuestion}</h3>
            <div className="post-images-and-sub-questions-container">
                <div className="post-images-container">
                    <img className="post-image"src={image1}/>
                    <img className="post-image"src={image2}/>
                </div>
                <div className="sub-questions-container">
                    <ul>
                        {subQuestionElements}
                    </ul>
                </div>
            </div>
            <div className="bottom-post-data-container">
                <p>{timeOfPost}</p>
                <p><a>{comments.length} comments</a></p>
            </div>
       </div>
    )
}