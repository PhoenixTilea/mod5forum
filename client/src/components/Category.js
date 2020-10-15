import React, {useRef, useState, useEffect}from "react"
import SignInForm from "./SignInForm"
import Topic from "./Topic"
import AddCategoryForm from "./AddCategoryForm"



export default function Category(props){
    const { title, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="category"  >
          {!editToggle ?
          <>
          <h1 id="category-title">{title}</h1>

          <button 
          className="delete-btn"
          onClick={() => props.deleteCategory(_id)}>
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
                title={title}
                btnText="Submit Edit"
                submit={props.editCategory}
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
