import { useState } from "react";
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/registration/Register";
import Studenttable from "./components/Studenttable";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./components/dashbord/Dashbord";
import Sidebar from "./components/sidebar/sidebar";
import Layout from "./components/layouts/lauout";
import Stu from "./pages/stu";

// root component
// create component using fucntions
// Initially everything will be displayed from here

// creating a root component
// js---HTML--- JSX
// JSX -- browser
// <> </> -> fragements
// first letter in the fucntion must be capital
// JSX:

// const [Students,setStudents] = useState([]);

function App(){
  const [students,setStudents] = useState([]);
  return(
    <div>
      {/* <Home/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/registration" element = {<Register/>} />
        <Route element = {<Layout/>}>
          {/* <Route path="/dashboard" element = {<Dashbord/>}/> */}
          <Route path="/" element = {<Stu students = {students}/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App; 