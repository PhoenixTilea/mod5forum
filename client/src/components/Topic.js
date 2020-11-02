import React from "react"
import User from "./User"
import { Link } from 'react-router-dom'


export default function Topic(props){
    const { title } = props
    return (
        <div className="topic">
          <User />
          <div className="topicDiv">
            <Link to={`/api/posts/${title._id}`}>
            <h1 id="topic-title">{title}</h1>
            </Link>
            
          </div>
          <div className="arrow-left"></div>
        </div>
    )
}