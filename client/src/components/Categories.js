import React, { useContext, useState, useEffect } from 'react'
//import axios from 'axios'
import Category from './Category'
import AddCategoryForm from './AddCategoryForm'
import {CategoryContext} from '../context/CategoryContext'



export default function Categories(props){
    
   
    const { deleteCategory, addCategory, _id, categories, setCurrentCategory } = useContext(CategoryContext)

return (
    <div className="category-container">
        <AddCategoryForm />
        {categories.map(category => 
        <Category {...category} 
        key={category.title}  
        />)}
        
    </div>
)
}

