import React from "react"

export default function Topic(props){
    const { title } = props
    return (
        <div className="topic">
          <h1 id="topic-title">{title}</h1>
        </div>
    )
}