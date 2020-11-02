import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btntext, 
    inputs: {
      username, 
      password
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <img className="" src="https://media-exp1.licdn.com/dms/image/C560BAQEbL8tsKTdbXA/company-logo_200_200/0?e=2159024400&v=beta&t=dHUW39BvOzMcgmpcQNsmgdcQlSHSgge4aPbnpXEGabM" alt="v-school logo"/>
      <h3 className="">FORUM</h3>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>{ btntext }</button>
    </form>
  )
}