import React, {useRef, useState, useEffect, useContext}from "react"
import {CategoryContext} from "../context/CategoryContext"
import { Link } from 'react-router-dom'






export default function Category(props){
  const {categories, _id, title, setCurrentCategory, addCategory, values, deleteCategory, currentCategory} = useContext(CategoryContext)
   

   

    // const _handleSubmit = e=> {
    //   props.handleSubmit(e, values)
    // }
  

    return (
        <div className="category"  >
          <Link to={'/api/topics/:categoryId'}> 
            <h1 id="category-title">{props.title}</h1>
          </Link>
            <br></br>
          <hr></hr>
        </div>
    )
}
