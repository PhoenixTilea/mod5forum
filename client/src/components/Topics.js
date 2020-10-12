import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Topic from './Topic'
import AddTopicForm from './AddTopicForm'



export default function Topics(props){
    
    const [topics, setTopics] = useState([{title: "HTML"}, {title: "CSS"}, {title: "Javascript"}, {title: "React"}, {title: "ES6"}])

function getTopics(){
    axios.get("/topics")
    .then(res => {
        setTopics(res.data)
    })
    .catch(error => console.log(error));
}

function addTopic(newTopic){
    axios.post("/api/topics", newTopic)
    .then(res => {
        setTopics(previousTopics => [...previousTopics, res.data ] )
    })
    .catch(error => console.log(error))

}
useEffect(() => {
   getTopics()
},[])


return (
   
    <div className="topics-container">
        <AddTopicForm addTopic={addTopic}/>
        <h1 className="category-header" >Category Topics</h1>
        {topics.map(topic => <Topic {...topic} key={topic.title} />)}
    </div>
)
}

