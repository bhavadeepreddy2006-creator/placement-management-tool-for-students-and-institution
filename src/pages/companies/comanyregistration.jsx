import { useState } from "react";
import "./company.css";

function CompanyRegistration(){

    const [companyName,setCompanyName]=useState("");
    const [role,setRole]=useState("");
    const [packageOffered,setPackage]=useState("");
    const [location,setLocation]=useState("");
    const [eligibility,setEligibility]=useState("");
    const [vacancies,setVacancies]=useState("");
    const [driveDate,setDriveDate]=useState("");

    function registerCompany(){

        console.log({
            companyName,
            role,
            packageOffered,
            location,
            eligibility,
            vacancies,
            driveDate
        });

    }

    return(

        <div className="registration-page">

            <div className="registration-card">

                <h1>Company Registration</h1>

                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Job Role"
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Package"
                    value={packageOffered}
                    onChange={(e)=>setPackage(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Eligibility"
                    value={eligibility}
                    onChange={(e)=>setEligibility(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Vacancies"
                    value={vacancies}
                    onChange={(e)=>setVacancies(e.target.value)}
                />

                <input
                    type="date"
                    value={driveDate}
                    onChange={(e)=>setDriveDate(e.target.value)}
                />

                <button onClick={registerCompany}>
                    Register Company
                </button>

            </div>

        </div>

    );

}

export default CompanyRegistration;