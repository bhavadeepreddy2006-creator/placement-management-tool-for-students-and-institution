import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../pages/registration/register.css";
import Stu from "../../pages/students/studentlist";

function Studenttable({students}){
  const {id,StudentName} = useParams();
  const navigate = useNavigate();
  // function studentdetails(){
  //   navigate("/student/")
  // }
  return(
    <div className="studenttable">
        <h2>Student Details</h2>
            {
              students.length === 0 ?
                <h2>No Student Found</h2>
              :
              <table border="1">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Reg NO</th>
                    <th>Email</th>
                    {/* <th>Phone</th> */}
                    <th>Branch</th>
                    <th>CGPA</th>
                    <th>Year</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((Student,id)=>(
                      <tr key={id}>
                        <td> {id+1}</td>
                        <td> {Student.studentName} </td>
                        <td> {Student.rollNo} </td>
                        <td> {Student.email} </td>
                        {/* <td> {Student.Phone} </td> */}
                        <td> {Student.branch} </td>
                        <td> {Student.cgpa} </td>
                        <td> {Student.year} </td>
                        <Link to={`/student/${Student.id}`}>
                        <td>View</td>
                        </Link>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              }
        </div>
  )
}
export default Studenttable;