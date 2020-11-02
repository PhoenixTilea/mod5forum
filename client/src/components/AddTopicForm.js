import React, { useState, useContext } from 'react';
import {TopicContext} from '../context/TopicContext.js'

export default function AddTopicForm(props){
    const initInputs = { title: "", category: "", user: {}, lastUpdated: ""}
    const [inputs, setInputs] = useState(initInputs)
    const { addTopic, updateTopic, deleteTopic, topics } = useContext(TopicContext)
    
    

    function handleChangeTopic (e) {
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
                onChange={handleChangeTopic}
                placeholder="Topic Title"/>
            
            <button id="add-topic-button">Add Topic</button>
        </form>
    )
}