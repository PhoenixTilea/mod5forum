import React, {useState, useContext} from "react"
import User from "./User"
import AddPostForm from "./AddPostForm"
//import TopicContext from '../context/TopicContext'


export default function Post(props){
    const { topic, text, title ,_id} = props
    //const {topic} = useContext(TopicContext)
    const [editToggle, setEditToggle] = useState(false)

    
    
    return (
        <div className="post">
            {//initial post made by original User who made the topic
            }       
            <h3 className="post-title">{topic.title}</h3>
            <p id="post-content">{topic.text}</p>
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
          <hr></hr>
          </>
          :
          <>
          <AddPostForm  
            text={text}
            btntext="Submit Edit"
            />
            <button className="closeEditing"
                onClick={()=> setEditToggle(prevEditToggle => !prevEditToggle)}>
                Close Editing
            </button>
            <hr></hr>
            </>
            }
        </div>
    )
}