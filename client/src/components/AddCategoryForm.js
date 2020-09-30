import React, { useState } from 'react';


export default function AddCategoryForm(props){
    const initInputs = { title: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addCategory(inputs)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="category-input"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Category Title"/>
            
            <button id="add-category-button">Add Category</button>
        </form>
    )
}