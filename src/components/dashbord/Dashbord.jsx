import "./dashbord.css";
import { useState } from "react";

function Dashbord(){
    const [Student,setStudent] = useState(250)
    function addstudent(){
        setStudent(Student + 1)
    }
    function delstudent(){
        setStudent(Student - 1)
    }
    const[Comp,setComp] = useState(35)
    function addComp(){
        setComp(Comp + 1)
    }
    function subComp(){
        setComp(Comp - 1)
    }

    const[Plac,setPlac] = useState(180)
    function addplace(){
        setPlac(Plac + 1)
    }
    function subplace(){
        setPlac(Plac - 1)
    }

    const[pend,setPend] = useState(70)
    function addpending(){
        setPend(pend + 1)
    }
    function subpending(){
        setPend(pend - 1)
    }

    // Hook using string
    const[name,setname] = useState("Rahul");
    function addname(){
        setname([
            "Rahul",
            "Ravi",
            "Anjali",

        ])
   }

    return(
        <div className="dashboard">
            <div className="cards">
                {/* <div className="card">
                    <p>Wlcome Back, {name}</p>
                    <button className="card-btn" onClick={addname}>Add name</button>
                </div> */}
                <div className="card">
                    <h2>{Student}</h2>
                    <p>Total Studets</p>
                    <div className="card-buttons">
                        <button className="card-btn" onClick={addstudent}>Add Student</button>
                        <button className="card-btn delete-btn" onClick={delstudent}>Delete Student</button>
                    </div>
                </div>
                <div className="card">
                    <h2>{Comp}</h2>
                    <p>Companies</p>
                    <div className="card-buttons">
                        <button className="card-btn" onClick={addComp}>Add companies</button>
                        <button className="card-btn delete-btn" onClick={subComp}>sub companies</button>
                    </div>
                </div>
                <div className="card">
                    <h2>{Plac}</h2>
                    <p>Placed</p>
                    <div className="card-buttons">
                    <button className="card-btn" onClick={addplace}>Add placed</button>
                    <button className="card-btn delete-btn" onClick={subplace}>Del Placed</button>
                    </div>
                </div>
                <div className="card">
                    <h2>{pend}</h2>
                    <p>Pending</p>
                    <div className="card-buttons">
                    <button className="card-btn" onClick={addpending}>Add Pending</button>
                    <button className="card-btn delete-btn" onClick={subpending}>Del Pending</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashbord;