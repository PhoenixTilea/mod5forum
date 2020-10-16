import React, {useState} from "react"
import User from "./User"
import AddPostForm from "./AddPostForm"



export default function Post(props){
    const { text, title ,_id} = props

    const [editToggle, setEditToggle] = useState(false)

    
    
    return (
        <div className="post">
            {!editToggle ?
            <>
            <User />
            <h3 className="post-title">{title}</h3>
            <p id="post-content">{text}</p>
            <button 
            id="delete-btn" 
                onClick={()=> props.deletePost(_id)}>
                Delete
            </button>
            <button 
            className="edit-btn"
                onClick={()=> setEditToggle(prevEditToggle=> !prevEditToggle)}>
                Edit
          </button>
          <AddPostForm  btnText="Reply" />
          <hr></hr>
          </>
          :
          <>
          <hr></hr>
          <AddPostForm  
            text={text}
            btnText="Submit Edit"
            />
            <button className="closeEditing"
                onClick={()=> setEditToggle(prevEditToggle => !prevEditToggle)}>
                Close Editing
            </button>
           
            </>
            }
        </div>
    )
}