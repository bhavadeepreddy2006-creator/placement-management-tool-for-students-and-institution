import { useState } from "react";
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Register from "./pages/registration/Register";
import Studenttable from "./components/students/Studenttable";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./components/dashbord/Dashbord";
import Sidebar from "./components/sidebar/sidebar";
import Layout from "./components/layouts/layout";
import Stu from "./pages/students/studentlist";
import Studetails from "./components/students/studentdetails";
import Notfound from "./pages/pagenotfound/NotFound";
import Companies from "./pages/companies/companies";
import CompanyDetails from "./components/companys/companydetails";
import CompanyRegistration from "./pages/companies/comanyregistration";
import CompanyList from "./components/companys/companieslist";

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
        {/* <Route path="/" element = {<Home/>}/> */}
        <Route path="/" element = {<Login/>}/>
        {/* <Route path="/" element = {<Login/>}/> */}
        <Route path="/registration" element = {<Register/>} />
        <Route element = {<Layout/>}>
          <Route path="/dashboard" element = {<Dashbord/>}/>
          <Route path="/student" element = {<Stu students = {students}/>}/>
          <Route path="/student/:id" element = {<Studetails/>}/>
          <Route path="/companyregistration"element={<CompanyRegistration/>}/>
          <Route path="/Companys" element={<CompanyList/>}/>
          <Route path="/company/:id"element={<CompanyDetails/>}/>
        </Route>
        <Route path="*" element = {<Notfound/>}>

        </Route>
      </Routes>
    </div>
  )
}
export default App; 