import React, {useRef, useState, useEffect}from "react"
import Topic from "./Topic"



export default function Category(props){
    const { title } = props
    const sidebarRef = useRef(null);
    const [isActive, setIsActive]= useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(()=> {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (sidebarRef.current !== null && !sidebarRef.current.contains(e.target)) {
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

     
    return (
        <div className="category"  >
          <h1 onClick={onClick} id="category-title">{title}</h1>
          <nav ref={sidebarRef} className={`topics-container ${isActive ? 'active' : 'inactive'}`}/> 
          <hr></hr>
        </div>
    )
}
