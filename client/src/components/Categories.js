import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from './Category'
import AddCategoryForm from './AddCategoryForm'




export default function Categories(){
    
    const [categories, setCategories] = useState([{title: "Web Development"}, {title: "User Interface UI"}, {title: "Career Development"}, {title: "Alumni"}])

function getCategories(){
    axios.get("/categories")
    .then(res => {
        setCategories(res.data)
    })
    .catch(error => console.log(error));
}

function addCategory(newCategory){
    axios.post("/api/categories", newCategory)
    .then(res => {
        setCategories(previousCategories => [...previousCategories, res.data ] )
    })
    .catch(error => console.log(error))

}
function deleteCategory(categoryId){
    axios.delete(`/categories/${categoryId}`)
        .then(res => {setCategories(prevCategories => prevCategories.filter(category => category._id !== categoryId))})
        .catch(err => console.log(err))
}
function editCategory(updates, categoryId){
    axios.put(`/categories/${categoryId}`, updates)
    .then(res => {
        setCategories(prevCategories => prevCategories.filter(category => category._id !== categoryId ? category : res.data))

    })
    .catch(err => console.log(err))
}

useEffect(() => {
   getCategories()
},[])


return (
    <div className="category-container">
       
        <AddCategoryForm 
            addCategory={addCategory}
            btnText="AddCategory"/>
            {categories.map(category => 
            <Category {...category} 
            key={category.title} 
            deleteCategory={deleteCategory}
            editCategory={editCategory}
        />)}

    </div>
)
}

