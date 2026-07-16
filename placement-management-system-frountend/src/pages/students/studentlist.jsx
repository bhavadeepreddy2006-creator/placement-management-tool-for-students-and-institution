import "./studentlist.css";
import { Link, useNavigate } from "react-router-dom";
import Studenttable from "../../components/students/Studenttable";
import { useEffect, useState } from "react";


function Students({students, setStudents}) {
    const [search, setSearch] = useState("");
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);


    if (loading) {
    return (
        <div className="loading">
            <h2>Loading Students...</h2>
        </div>
    );
}
    // Functionality for deleting a student
    function deletestudent(id){
        const updatedstudents = students.filter(
            (student)=>student.id!==id
        );
        setStudents(updatedstudents);
        localStorage.setItem("students",JSON.stringify(updatedstudents));
    }

    const filteredStudents = students.filter((student) =>
        student.studentName.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase()) ||
        student.branch.toLowerCase().includes(search.toLowerCase())
    );
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
        <input
            className="search-box"
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </div>

    <div className="student-table-container">
        <Studenttable students={filteredStudents} deletestudent = {deletestudent}/>
    </div>
</div>
    );
}

export default Students;