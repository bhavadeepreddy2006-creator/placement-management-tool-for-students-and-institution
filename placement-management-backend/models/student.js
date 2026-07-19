import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName : {
        type : String,
        required : true,
        trim : true
    },
    rollNo : {
        type : String,
        require : true,
        trim : true,
        unique : true
    },
    email : {
        type : String,
        require : true,
        trim : true
    },
    phone : {
        type : String,
        require : true,
        minlength : 10,
        maxlength : 10,
        trim : true
    },
    branch : {
        type : String,
        require : true,
        enum : ["CSE","CSM","CSE-AI","CIVIL","ECE","EEE"]
    },
    cgpa : {
        type : Number,
        require : true,
        min : 0,
        max : 10
    },
    year : {
        type : Number,
        require : true,
        min : 1,
        max : 4
    }
},{
    timestamps : true
});

// Model :  represents a MongoDB collection and used to perform crud operations
const Student = mongoose.model(
    "Student",
    studentSchema
);

export default Student;