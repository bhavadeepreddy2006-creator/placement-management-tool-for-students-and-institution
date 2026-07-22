import { json, response } from "express";
import Student from "../models/student.js";

export async function getStudents(req,res){
    try{
        const sortField = req.query.sort || "studnetName";
        const order =  req.query.order || "asc";
        const student = await Student.find().toSorted({[sortField]:sortorder})
        const page = Number(res.query.page);
        const limit = Number(res.query.limit) || 10;
        const skip = (pages-1)*limit;
        // conunting students form mongo
        const totalStudents =  await Student.countDocuments();
        const totalpages = Math.ceil(totalStudents/limit);
        const students = await Student.find().skip(skip).limit(limit);
        res.status(200).json({
            success : true,
            students,
            currentpage : page,
            totalpages,
            totalStudents
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            students
        })
    }
};

export async function getStudentsById(req, res) {
    
    try {
        
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function addstudent(req,res){
    // create a new documnet in mongodb
    try{
        const image = req.file ?
        req.file.filename : "";
        // create a new document in mongodb
        const student = await Student.create({
            studentName,
            email,
            phone,
            branch,
            cgpa,
            year,
            image
        })
            res.status(201).json({
                success : true,
                message : "Studnet Registered Succesfully",
                student
            })
    }
    catch(error){
        res.status(201).json({
            success : false,
            message : error.message,
            student
        })
    }
    }
            // // Read the JSON data -- react form
            // const student = req.body;
            // // VALIDATION
            // const id = Number(req.params.id);

            // const existingstudent = students.find(
            //     (s)=>s.id === students.id
            // );
            // if(existingstudent){
            //     return res.status(200).json({
            //         success : false,
            //         message : "student already found"
            //     });
            // };
            // add into the array
    // students.push(student)
    // res.status(201).json({
    //     success : true,
    //     message : "Student Registered successfully",
    //     student
    // });


export async function UpdateStudent(req,res){
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );
        if(!student){
            return res.status(400).json({
                success : false,
                message : "Student not found"
            });
        };
        res.status(200).json({
            success : true,
            message : "Student updated succefull",
            student
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });
    };
};

export async function deleteStudent(req,res){
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({
                success : false,
                message : "student is not found"
            });
        };
        res.status(200).json({
        success : true,
        message : "Student deleted successfully"
    });
    }catch(error){
        return res.status(500).json({
            success : false,
            message : error.message
        });
    };
};

export const searchstudents = async(req,res) =>{
    
    try{
        const search = req.query.q || "";

        const students = await Student.find({
            studentName : {
                $regex : search,
                // ignore uppercase and lowercase
                $options : "i"
            }
        });
        res.status(200).json({
            success : true,
            message : "serach complete"
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}