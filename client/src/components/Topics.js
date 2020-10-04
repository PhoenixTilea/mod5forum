import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Topic from './Topic'
import AddTopicForm from './AddTopicForm'
import Categories from './Categories'


export default function Topics(props){
    
    const [topics, setTopics] = useState([{title:"CSS"}, {title: "HTML"}, {title: "JavaScript"}])

function getTopics(){
    axios.get("http://localhost:8000/topics")
    .then(res => {
        setTopics(res.data)
    })
    .catch(error => console.log(error));
}

function addTopic(newTopic){
    axios.post("http://localhost:8000/protected/topics", newTopic)
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
        <h1 className="category-header" >Web Development</h1>
        {topics.map(topic => <Topic {...topic} key={topic.title} />)}
        <AddTopicForm addTopic={addTopic}/>
    </div>
)
}

