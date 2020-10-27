import React, {useRef, useState, useEffect, useContext}from "react"
import SignInForm from "./Auth"
import Topic from "./Topic"
import AddCategoryForm from "./AddCategoryForm"
import CategoryContext from "../context/CategoryContext"




export default function Category(props){
  const {title, _id, addCategory, values, deleteCategory} = props
    const [editToggle, setEditToggle] = useState(false)

    const _handleSubmit = e=> {
      props.handleSubmit(e, values)
    }
  //   function deleteCategory(categoryId){
  //     axios.delete(`/categories/${categoryId}`)
  //         .then(res => {setCategories(prevCategories => prevCategories.filter(category => category._id !== categoryId))})
  //         .catch(err => console.log(err))
  // }

    return (
        <div className="category"  >
          {!editToggle ?
          <>
          <h1 id="category-title">{title}</h1>

          <button 
          className="delete-btn"
          onClick={() => deleteCategory(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={()=> setEditToggle(prevEditToggle => !prevEditToggle)}>
              Edit
            </button>
            <br></br>
          <hr></hr>
            </>
            :
            <>
            <hr></hr>
              <AddCategoryForm 
                addCategory={addCategory}
                title={title}
                btnText="Submit Edit"
                onSubmit={_handleSubmit}
                id={_id}
              />
              <br></br>
              <hr></hr>
              <button
                onClick={()=> setEditToggle(prevEditToggle => !prevEditToggle)}>
                  Close
                </button>
            </>
          }
        </div>
    )
}
