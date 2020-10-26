import React, { useState, useContext} from "react"
import { UserContext} from '../context/UserContext.js'

export default function User (props) {
    const {user: {username, joinDate, imgUrl}} = useContext(UserContext)
    //needs functionality to map individual data and provide image, name and member since date.

    return (
        
        <div className="user">
            <p className="user-member">{ username }</p>
            <p className="user-date">member since {joinDate}</p>
            <img className="userAvatar" id="userImage"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPnVcve3YiuC1VJMAPpRKQtVc3uiwzmW5uEA&usqp=CAU" alt="user avatar"/>
           
           
        </div>
    )
}