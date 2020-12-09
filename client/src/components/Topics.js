import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Topic from './Topic'
import AddTopicForm from './AddTopicForm'
import {TopicContext} from '../context/TopicContext'
import {CategoryContext} from '../context/CategoryContext'





export default function Topics(props){
    
//const [topics, setTopics] = useState([{title: "HTML"}, {title: "CSS"}, {title: "Javascript"}, {title: "React"}, {title: "ES6"}])
    const { addTopic , topics } = useContext(TopicContext)
    const { currentCategory , title} = useContext(CategoryContext)
    console.log('CurrentCategory', currentCategory, title)

return (
   
    <div className="topics-container">
        
        <h1 className="category-header" >{title}</h1>
        {topics.map(topic => <Topic {...topic} key={topic.title} />)}
        <AddTopicForm addTopic={addTopic}/>
    </div>
)
}

