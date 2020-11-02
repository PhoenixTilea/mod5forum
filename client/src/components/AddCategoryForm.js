import React, { useState, useContext } from 'react';
import {CategoryContext} from "../context/CategoryContext"


export default function AddCategoryForm(props){
    const initInputs =  props.initialInputs ||{title: '', description: ''}

    const [inputs, setInputs] = useState(initInputs)
    const { values, setValues} = useState(props.initialValues || {title: '', description: ''})
    const {addCategory} = useContext(CategoryContext)
    

    const handleChange = e => {
        const {target } = e;
        setInputs({
          ...inputs, 
          [target.name]: target.value
        })
      
    }

    function handleSubmit(e){
        e.preventDefault()
        addCategory(inputs)
        setInputs(initInputs)
    }

    // const [categories, setCategories] = React.useState([]);
    // const addCategory = (newCategory) => {
    //     // add categories to the array
    //     setCategories([...categories, newCategory])
    // }
    // const editCategory = (id, updatedCategory) => {
    //     // find category in existing array, and update it with new values
    //     setCategories(categories.map((category, i) => {
    //         if (i == id) return updatedCategory;
    //         else return category;
    //     }))
    // }
    // const handleAdd = (e, values) => {
    //     e.preventDefault();
    //     addCategory(values);
    // }
    // const handleEdit = (e, values) => {
    //     const { target } = e;
    //     e.preventDefault();
    //     editCategory(target.id, values)
    // }



    return (
        <form className="categories-form" onSubmit={handleSubmit}>
            <input
                id="category-input"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Category Title"
                btntext="Add Category"/>
                
            
            <button id="add-category-button">Add</button>
        </form>
    )
}