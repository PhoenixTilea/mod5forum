import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Topic from './Topic'
import AddTopicForm from './AddTopicForm'


export default function Topics(){
    
    const [topics, setTopics] = useState([])

function getTopics(){
    axios.get("http://localhost:9000")
    .then(res => {
        setTopics(res.data)
    })
    .catch(error => console.log(error));
}

function addTopic(newTopic){
    axios.post("http://localhost:9000", newTopic)
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
        {topics.map(topic => <Topic {...topic} key={topic.title} />)}
        <AddTopicForm addTopic={addTopic}/>
    </div>
)
}

