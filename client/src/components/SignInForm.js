import React from "react"

//create a button for new user to create account.
export default function SignInForm () {
    return (
        <div>
            <form>
                <input name="username" type="text" placeholder="User Name" label="Username"></input>
                <input name="password" type="password" placeholder="Password" label="Password"></input>
                <input name="imgUrl" type="text" placeholder="Image URL" label="User Image"></input>
            </form>
        </div>
    )
}