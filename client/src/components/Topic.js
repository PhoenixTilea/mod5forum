import React from "react"
import User from "./User"

export default function Topic(props){
    const { title } = props
    return (
        <div className="topic">
          <User />
          <div className="topicDiv">
            <h1 id="topic-title">{title}</h1>
          </div>
          <div class="arrow-left"></div>
        </div>
    )
}