import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../pages/registration/register.css";
import Stu from "../../pages/students/studentlist";

function Studenttable({students, deletestudent}){
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
                    <th>Student UID</th>
                    <th>Name</th>
                    <th>Reg NO</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Branch</th>
                    <th>CGPA</th>
                    <th>Year</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((Student,id)=>(
                      <tr key={Student.id} key={id}>
                        <td>{id+1}</td>
                        <td> {Student.id}</td>
                        <td> {Student.studentName} </td>
                        <td> {Student.rollNo} </td>
                        <td> {Student.email} </td>
                        <td> {Student.Phone} </td>
                        <td> {Student.branch} </td>
                        <td> {Student.cgpa} </td>
                        <td> {Student.year} </td>
                        <td className="action-buttons">
                        <Link to={`/student/${Student.id}`}>
                        <button>View</button>
                        </Link>
                        <Link to={`/student/edit/${Student.id}`}>
                            <button className="edit-btn">
                                Edit
                            </button>
                        </Link>
                        <button onClick={()=>deletestudent(Student.id)}>Delete</button>
                        </td>
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