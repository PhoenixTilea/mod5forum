import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Topic from './Topic'
import AddTopicForm from './AddTopicForm'




export default function Topics(props){
    
    const [topics, setTopics] = useState([{title: "HTML"}, {title: "CSS"}, {title: "Javascript"}, {title: "React"}, {title: "ES6"}])
    const {addTopic } = props


return (
   
    <div className="topics-container">
        <AddTopicForm addTopic={addTopic}/>
        <h1 className="category-header" >Topics</h1>
        {topics.map(topic => <Topic {...topic} key={topic._id} />)}
    </div>
)
}

