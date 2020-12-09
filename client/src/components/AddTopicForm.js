import React, { useState, useContext } from 'react';
import {TopicContext} from '../context/TopicContext.js'

export default function AddTopicForm(props){
    const initInputs = { title: "", category: "", user: {}, lastUpdated: ""}
    const [inputs, setInputs] = useState(initInputs)
    const { addTopic, updateTopic, deleteTopic, topics } = useContext(TopicContext)
    
    

    function handleChange (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitTopic(e){
        e.preventDefault()
        
        addTopic(inputs)
        setInputs(initInputs)
    }
    
    return (

        <form className="topic-form"onSubmit={handleSubmitTopic}>
            <input
                id="topic-input"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Topic Title"/>
            
            
            <input id="topic-post"
                type="text"
                value={inputs.post}
                onChange={handleChange}
                placeholder="Topic Post"/>
            <button id="add-topic-button">Add Topic and Post</button>    
        </form>
    )
}