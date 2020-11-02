import React, {useContext } from 'react'
import './App.css'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import Auth from './components/Auth.js'

import { Switch, Route , Redirect} from 'react-router-dom'
import {UserContext} from './context/UserContext.js'





function App() {
  const { token } = useContext(UserContext)

  //Menu holds Categories(Boards)
  return (
    <div >
      
      <Switch>
        <Route
          exact path="/"
          render={()=> token ? <Redirect  to="/profile"/> : <Auth />}
          />
          <Route 
          path="/profile"
          render={() => <Profile />}
        />
        <Route 
          path="/public"
          render={() => <Public />}
        />
      </Switch>
       
    </div>
  );
}

export default App;
