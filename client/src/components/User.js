import React from "react"

export default function User (props) {
    //needs functionality to map individual data and provide image, name and member since date.
    
    return (
        
        <div className="user">
        
            <img className="userAvatar" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="user avatar"/>
           
            <p className="user-member-date">username</p>
            <p className="user-member-date">member since joinDate</p>
           
        </div>
    )
}