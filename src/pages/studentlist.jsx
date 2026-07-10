import { Link } from "react-router-dom";
import Studenttable from "../components/Studenttable";

function Stu({students}){
    return(
        <div className="body">
            <h1>Student Management</h1>
            <p>Manage all registered students</p>
            <Link to="/registration">
                <button>
                    Add New Student
                </button>
            </Link>
            <Studenttable students = {students}/>
        </div>
    )
}
export default Stu;