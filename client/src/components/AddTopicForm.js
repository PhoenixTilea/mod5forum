import React, { useState } from 'react';


export default function AddTopicForm(props){
    const initInputs = { title: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChangeTopic (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitTopic(e){
        e.preventDefault()
        props.addTopic(inputs)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmitTopic}>
            <input
                id="topic-input"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChangeTopic}
                placeholder="Topic Title"/>
            
            <button id="add-topic-button">Add Category</button>
        </form>
    )
}