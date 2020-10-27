import React, { useContext } from 'react'
import Posts from '../components/Posts.js'
import Topics from '../components/Topics.js'
import Menu from '../components/Menu.js'


export default function Public(props){
  const {logout} = props
  return (
    <div className="App" id="profile">
       <Menu  logout={ logout }/>
        <Topics />
        <Posts />
    </div>
  )
}