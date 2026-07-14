import { Link, useNavigate } from "react-router-dom";
// import Studenttable from "../../components/students/Studenttable";
import Studenttable from "../../components/students/Studenttable";
import "./register.css";
import { useState } from "react";

function Register({students, setStudents}){
    const [studentName,SetStudentName] = useState("");
    const [rollNo,setrollNo] = useState("");
    const [email,setemail] = useState("");
    const [Phone,setphone] = useState("");
    const [branch,setbranch] = useState("");
    const [cgpa,setcgpa] = useState("");
    const [year,setyear] = useState("");
    const [Password,setpassword] = useState("");
    // const [students,setStudents] = useState([]);
    const navigate = useNavigate();

    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function registerstudent(event){
      event.preventDefault();

      // validation
      if(studentName.trim()==="" || Phone.trim()==="" || branch.trim()==="" || Password.trim()==="")
      {
        alert("Please fill all the fields")
        return;
      }
      if(!emailpattern.test(email)){
        alert("Enter vaied email")
      }
      if(!passwordpattern.test(Password)){
        alert("Week Password")
      }
      
      const Student ={
        id:Date.now(),
        studentName,
        rollNo,
        email,
        Phone,
        branch,
        cgpa,
        year,
        Password
      };
      //Add students to array
      // spread operator
      const updatedstudents = [
        ...students,Student
      ]

      setStudents(updatedstudents);
      localStorage.setItem("Studentdata",
        JSON.stringify(updatedstudents)
      );

      navigate("/student");

      // clear form
      SetStudentName("");
      setemail("");
      setphone("");
      setbranch("");
      setcgpa("");
      setpassword("");
    }

    return(
      <div className="registration-container">
      <div className="registration-card">
        <h1>Student Registration</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Student Name"
              onChange={(event) => SetStudentName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Reg.no"
              onChange={(event) => setrollNo(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Enter Phone Number"
              onChange={(event) => setphone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Branch"
              onChange={(event) => setbranch(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter Cgpa"
              onChange={(event) => setcgpa(event.target.value)}
            />
          </div>
          <div className="form-group">
            <select
                    value={year}
                    onChange={(e) => setyear(e.target.value)}>
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter password"
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
          <button className="button" type="submit" onClick={registerstudent}>
            Register Student
          </button>
        </form>
        <Link to="/">
        <h3>Already had an acount</h3>
        </Link>
        <Studenttable students = {students} />
      </div>
    </div>
    )
}
export default Register;