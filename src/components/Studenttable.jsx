import "../pages/registration/register.css";

function Studenttable({students}){
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Branch</th>
                    <th>CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map((Student,index)=>(
                      <tr key={index}>
                        <td> {index+1}</td>
                        <td> {Student.StudentName} </td>
                        <td> {Student.email} </td>
                        <td> {Student.Phone} </td>
                        <td> {Student.Branch} </td>
                        <td> {Student.cgpa} </td>
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