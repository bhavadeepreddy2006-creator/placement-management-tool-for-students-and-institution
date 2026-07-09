import { useState } from "react";
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/home";

// root component
// create component using fucntions
// Initially everything will be displayed from here

// creating a root component
// js---HTML--- JSX
// JSX -- browser
// <> </> -> fragements
// first letter in the fucntion must be capital
// JSX:


function App(){
  return(
    <div>
      {/* <Home/> */}
      <Login/>
    </div>
  )
}
export default App; 