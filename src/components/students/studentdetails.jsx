import { useParams } from "react-router-dom";

function Studetails(){
    const {id, StudentName} = useParams();
    return(
        <>
            {/* <div>
                <p>student name : {props.name}</p>
                <p>Student regno : {props.regno}</p>
                <p>Student Dept : {props.dept}</p>
            </div> */}
            <div>
                <h1>Student details</h1>
                <hr/>
                <h2>Student Id: {id} </h2>
                <p>Name : {StudentName}</p>
            </div>
        </>
        
    )
}
export default Studetails;