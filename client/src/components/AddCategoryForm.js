import React, { useState } from 'react';


export default function AddCategoryForm(props){
    const initInputs = { title: props.title || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange (e) {
        const {name, value } = e.target
        setInputs(prevCategories => ({ ...prevCategories, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addCategory(inputs)
        setInputs(initInputs)
    }
    return (
        <form className="categories-form" onSubmit={handleSubmit}>
            <input
                id="category-input"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Category Title"
                btnText="Submit"
                /> 
            <button>{props.btnText}</button>
            
        </form>
    )
}