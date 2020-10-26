import React, { useContext } from 'react'
import Posts from './Posts.js'
import Menu from './Menu.js'
import Topics from './Topics.js'
import { UserContext } from '../context/UserContext'



export default function Profile(props){
  const { user: {username}, logout} = useContext(UserContext)
  return (
    <div className="App" id="profile">
      
      <Menu  logout={ logout }/>
      <Topics />
      <Posts />
    </div>
  )
}