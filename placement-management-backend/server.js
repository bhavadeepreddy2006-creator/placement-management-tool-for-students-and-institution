import express, { request, response } from "express";
import stundentsRoutes from "./routes/stundentsRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import connectDB from "./config/db.js";
import authrouts from "./routes/authrouts.js";
import  cors from "cors";

const app = express();
// const express = require("express");

// Middleware : converts json-objects
app.use(express.json());
app.use(cors());

app.use("/uploads",express.static("uploads"));

app.use("/auth",authrouts);

// call connections db
connectDB();

app.use("/students",stundentsRoutes);
app.use("/home",homeRoutes);

app.use("/company",companyRoutes);

app.listen(8000,()=>{
    console.log("server is strated at 8000");
});

// app.get("/",(req,res)=>{
//     res.send("This is my backend");
// });

// app.get("/stundents",(req,res)=>{
//     res.json(students);
// });


// let students = [
//     {
//         id:101,
//         studentName : "Bhavadeep",
//         branch : "Cse",
//         cgpa : 8.5
//     },
//     {
//         id:102,
//         studentName : "Narendra",
//         branch : "Ai",
//         cgpa : 8.9
//     },
//     {
//         id:103,
//         studentName : "Manu",
//         branch : "Aiml",
//         cgpa : 9.0
//     }
// ]


// // Middleware -  convert json - js object
// app.use(express.json());

// app.get("/",(request,response)=>{
//     response.send("Bhavadeep Reddy");
// });

// app.get("/home",(request,response)=>{
//     response.send("This is my home page");
// });

// app.get("/company",(request,response)=>{
//     response.send("welcome to the company");
// });

// app.get("/students",(request,response)=>{
//     response.json(students);
// });

// app.get("/students/:id",(request,response)=>{
//     const id = Number(request.params.id);
//     const student = students.find(
//         (student)=>student.id === id
//     );
//     response.json(student)
// });

// app.post("/students",(req,res)=>{
//     const student = req.body;
//     // req.body consist of react form data
//     students.push(student);
//     res.status(201).json({
//         message : "Student Added",
//     });
//     console.log(student);
// });

// // Create an array named as companies
// // store 2 companies
// // id, name, num_of_emp
// // create a route with post
// // test with POSTMAN

// let companies = [
//     {
//         id : 101,
//         name : "TCS",
//         num_of_emp : 60
//     },
//     {
//         id : 102,
//         name : "Infosys",
//         num_of_emp : 50
//     },
//     {
//         id : 103,
//         name : "HCL",
//         num_of_emp : 90
//     }
// ]

// app.get("/comp",(request,response)=>{
//     response.json(companies);
// });

// app.get("/comp/:id",(request,response)=>{
//     const id = Number(request.params.id);
//     const company = companies.find(
//         (company)=>company.id === id
//     );
//     response.json(company)
// });

// app.post("/comp",(req,res)=>{
//     const company = req.body;
//     // req.body consist of react form data
//     companies.push(company);
//     res.status(201).json({
//         message : "€company Added",
//     });
//     // console.log(company);
// });