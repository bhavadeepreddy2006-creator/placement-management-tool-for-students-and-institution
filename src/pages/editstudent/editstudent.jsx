import {useParams,useNavigate} from "react-router-dom";
import { useState } from "react";
// import './EditStudent.css';
function EditStudent({students,setStudents}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const student = students.find((student) => student.id === Number(id));
    const [StudentName,setStudentName] = useState(student?.studentName || "");
    // const [rollNo,setrollNo] = useState(rollNo?.rollNo || "");
    const [email,setEmail] = useState(student?.email || "");
    const [phone,setPhone] = useState(student?.Phone || "");
    const [branch,setBranch] = useState(student?.branch || "");
    const [cgpa,setCgpa] = useState(student?.cgpa || "");
    const [year,setyear] = useState(student?.year || "");

    if(!student){
        return <h2>No Students found</h2>;
    }
    function updateStudent(e){
        e.preventDefault();
        const updatedStudents = students.map((s) => s.id=== Number(id) ? 
        { ...s, studentName, email, Phone, branch, cgpa, year } :s);
        setStudents(updatedStudents);
        navigate("/students");
    };
    return(
        <div>
        <h1>Do you want to edit me?</h1>
        <form onSubmit={updateStudent}>
            <input value={StudentName} 
            onChange={(e)=>setStudentName(e.target.value)} />
            {/* <input value={rollNo} 
            onChange={(e)=>setrollNo(e.target.value)} /> */}
            <input value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <input value={phone}
            onChange={(e)=>setPhone(e.target.value)} />
            <input value={branch}
            onChange={(e)=>setBranch(e.target.value)} />
            <input value={cgpa}
            onChange={(e)=>setCgpa(e.target.value)} />
            <input value={year} 
            onChange={(e)=>setyear(e.target.value)} />
            <button type="submit">
            Update Student
            </button>
        </form>
        </div>
    )
};
export default EditStudent;