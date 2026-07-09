import "./register.css";
import { useState } from "react";

function Register(){
    const [StudentName,SetStudentName] = useState("");
    const [email,setemail] = useState("");
    const [Phone,setphone] = useState("");
    const [Branch,setbranch] = useState("");
    const [Password,setpassword] = useState("");
    
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function registerstudent(event){
      event.preventDefault();

      // validation
      if(StudentName.trim()==="" || Phone.trim()==="" || Branch.trim()==="" || Password.trim()==="" )
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
              type="password"
              placeholder="Enter password"
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
          <button type="submit" onClick={registerstudent}>
            Register Student
          </button>
        </form>
        <div className="studentdetails">
          <h2>Student Details</h2>
          <p>Name:{StudentName} </p>
          <p>Email:{email} </p>
          <p>Phone:{Phone} </p>
          <p>Branch:{Branch} </p>
        </div>
      </div>
    </div>
    )
}
export default Register;