import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from './Category'
import AddCategoryForm from './AddCategoryForm'




export default function Categories(){
    
    const [categories, setCategories] = useState([{title:"Web Development"}, {title: "UI/UX"}, {title:"Career Development"}, {title:"Networking"}])

function getCategories(){
    axios.get("https://localhost:8000/categories")
    .then(res => {
        setCategories(res.data)
    })
    .catch(error => console.log(error));
}

function addCategory(newCategory){
    axios.post("https://localhost:8000//protected/categories", newCategory)
    .then(res => {
        setCategories(previousCategories => [...previousCategories, res.data ] )
    })
    .catch(error => console.log(error))

}
useEffect(() => {
   getCategories()
},[])


return (
    <div className="category-container">
       
        <AddCategoryForm addCategory={addCategory}/>

        {categories.map(category => <Category {...category} key={category.title} />)}

    </div>
)
}

