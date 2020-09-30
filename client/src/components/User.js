import React, { useState } from "react"

export default function User () {
    //needs functionality to loop through data and provide through props to image, name and member since date.
    return (

        <div>
            <div>
            <img className="userAvatar" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="user avatar"/>
            </div>
            {//<div className="user-member-date">
            }
                {//<p>User Name <span id="member-since">Member since: Date, Month, Year</span></p>
                }
            {//</div>
            }
        </div>
    )
}