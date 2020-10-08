import React, { useState } from "react"

export default function User (props) {
    //needs functionality to map individual data and provide image, name and member since date.
    const [avatarImage, setAvatarImage] = useState(["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
])
    return (
        
        <div className="user">
            <p className="user-member">username</p>
            <p className="user-date">member since joinDate</p>
            <img className="userAvatar" id="userImage"src={avatarImage} alt="user avatar"/>
           
           
        </div>
    )
}