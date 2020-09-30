import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from './Category'
import AddCategoryForm from './AddCategoryForm'




export default function Categories(){
    
    const [categories, setCategories] = useState([])

function getCategories(){
    axios.get("http://localhost:9000")
    .then(res => {
        setCategories(res.data)
    })
    .catch(error => console.log(error));
}

function addCategory(newCategory){
    axios.post("http://localhost:9000", newCategory)
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

