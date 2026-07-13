import "./studentlist.css";
import { Link, useNavigate } from "react-router-dom";
import Studenttable from "../../components/students/Studenttable";
import { useEffect, useState } from "react";


function Students() {
    const [students,setStudents] = useState([]);
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setStudents([
                {
            id: 1,
            studentName: "Nani",
            rollNo: "23HT1A0501",
            email: "nani@gmail.com",
            password: "Nani@123",
            branch: "CSE",
            cgpa: 8.8,
            year: "4th Year"
        },
        {
            id: 2,
            studentName: "Love",
            rollNo: "23HT1A0502",
            email: "love@gmail.com",
            password: "Love@123",
            branch: "AI",
            cgpa: 8.5,
            year: "4th Year"
        }

            ]);
            setLoading(false);
        },2000)
    },[]);
    if(loading){
        return <h2>Loading .......</h2>
    }
        
    function regclick(){
        navigate("/registration");
    }

    return (
        <div className="student-page">

    <div className="student-header">

        <div className="student-heading">

            <h1 className="student-title">
                Student Management
            </h1>

            <p className="student-subtitle">
                Manage all registered students here.
            </p>

        </div>

        <button
            className="add-student-btn"
            onClick={regclick}
        >
            + Add New Student
        </button>

    </div>

    <div className="student-table-container">
        <Studenttable students={students} />
    </div>

</div>
    );
}

export default Students;