import "./studentlist.css";
import { Link, useNavigate } from "react-router-dom";
import Studenttable from "../../components/students/Studenttable";
import { useEffect, useState } from "react";


function Students({students, setStudents}) {
    // const [students,setStudents] = useState([]);
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);


    if(loading){
        return <h2>Loading .......</h2>
    }
    // Functionality for deleting a student  
    function deletestudent(id){
        const updatedstudents = students.filter(
            (student)=>student.id!==id
        );
        setStudents(updatedstudents);
        localStorage.setItem("students",JSON.stringify(updatedstudents))
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
        <Studenttable students={students} deletestudent = {deletestudent}/>
    </div>
</div>
    );
}

export default Students;