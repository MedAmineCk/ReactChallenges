import React from "react"
import Title from "./subcomponents/Title"
import Description from "./subcomponents/Description"

export default function TopText(props) {
    return (
        <section>
            <Title userEmail={props.userEmail} duplicate={props.duplicate}/>
            <Description userEmail={props.userEmail} duplicate={props.duplicate}/>
        </section>
    )
}