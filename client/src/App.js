import React from 'react';
import './App.css';
import Menu from "./components/Menu"
import Topics from "./components/Topics"
import Posts from "./components/Posts"
import Replies from "./components/Replies"


function App() {
  //Menu holds Categories(Boards)
  return (
    <div className="App">
      <Menu /> 
      <Topics />
      <Posts />
      <Replies />

    </div>
  );
}

export default App;
