import React, {useState, useEffect, useRef, useContext} from "react"
import User from "./User"
import Categories from "./Categories"
import { Link } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './Auth'



///set currentCategory with _id   and do the same for topic set currrentCategory

export default function Menu (props){
    const { logout, inputs } = props
    const dropdownRef = useRef(null);
    const [isActive, setIsActive]= useState(false);
    const onClick = () => setIsActive(!isActive);
    
   

    useEffect(()=> {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
              setIsActive(!isActive);
            }
          };
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return()=> {
            window.removeEventListener('click', pageClickEvent);
        }
     }, [isActive])

    //  function handleLogout(e){
    //     e.preventDefault()
    //     logout(inputs)
    //   }

    return(
        <>
           
             <div className="menu-container">
            
             <button onClick={onClick} className="menu-trigger">
                
                 <h2 className="categories-label"> Categories </h2>
                <img className="menu-img"src= "https://static.thenounproject.com/png/696519-200.png"  alt="menu"/>
             </button>
                <User />
                <button onClick={ logout }><Link to="/">
                    Logout</Link></button> 
                <img className="v-school-logo" src="https://media-exp1.licdn.com/dms/image/C560BAQEbL8tsKTdbXA/company-logo_200_200/0?e=2159024400&v=beta&t=dHUW39BvOzMcgmpcQNsmgdcQlSHSgge4aPbnpXEGabM" alt="v-school logo"/>
                <h3 className="forum-label">FORUM</h3>
                
             <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <Categories />
                </ul>
             </nav>
             <div className="navbar">
                <Link to="/profile">Profile</Link>
                <Link to="/public">Public</Link>
            </div>
             </div>
             
        </>
    )
}


