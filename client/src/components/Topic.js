import React, {useContext} from "react"
import User from "./User"
import { Link } from 'react-router-dom'
import {TopicContext} from '../context/TopicContext'




export default function Topic(props){

  const {title, currentTopic} = useContext(TopicContext)
   
    return (
        <div className="topic">
          <User />
          <div className="topicDiv">
            <Link to={`/api/posts/${currentTopic}`}>
            <h1 id="topic-title">{title}</h1>
            </Link>
            
          </div>
          <div className="arrow-left"></div>
        </div>
    )
}