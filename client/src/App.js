import React from 'react';
import './App.css';
import Menu from "./components/Menu"
import Topics from "./components/Topics"
import Posts from "./components/Posts"



function App() {
  //Menu holds Categories(Boards)
  return (
    <div className="App">
      <Menu /> 
      <Topics />
      <Posts />
    </div>
  );
}

export default App;
