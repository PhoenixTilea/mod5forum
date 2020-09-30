import React from "react"

export default function Category(props){
    const { title } = props
    return (
        <div className="category">
          <h1 id="category-title">{title}</h1>
          <hr></hr>
        </div>
    )
}
