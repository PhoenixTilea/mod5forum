import React, { useState, useContext } from 'react';
import {TopicContext} from '../context/TopicContext.js'

export default function AddTopicForm(props){
    const initInputs = { title: "", text: ""}
    const [inputs, setInputs] = useState(initInputs)
    const { addTopic } = useContext(TopicContext)
    
    

    function handleChange (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitTopic(e){
        e.preventDefault()
        
        const { title, text } = inputs;
		addTopic({ title }, { text })
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
				required
                placeholder="Topic Title"/>
				<textarea name="text" value={inputs.text} onChange={handleChangeTopic} required></textarea>
            
            
            <input id="topic-post"
                type="text"
                value={inputs.post}
                onChange={handleChange}
                placeholder="Topic Post"/>
            <button id="add-topic-button">Add Topic and Post</button>    
        </form>
    )
}