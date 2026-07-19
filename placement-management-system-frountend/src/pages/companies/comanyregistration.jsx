import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./company.css";

function CompanyRegistration({ companies, setCompanies }) {

    const navigate = useNavigate();

    const [companyName, setCompanyName] = useState("");
    const [role, setRole] = useState("");
    const [packageOffered, setPackageOffered] = useState("");
    const [location, setLocation] = useState("");
    const [eligibility, setEligibility] = useState("");
    const [vacancies, setVacancies] = useState("");
    const [driveDate, setDriveDate] = useState("");
    const [message, setMessage] = useState("");

    function registerCompany(e) {

        e.preventDefault();

        if (
            companyName.trim() === "" ||
            role.trim() === "" ||
            packageOffered.trim() === "" ||
            location.trim() === "" ||
            eligibility.trim() === "" ||
            vacancies.trim() === "" ||
            driveDate.trim() === ""
        ) {
            setMessage("Please fill all the fields.");
            return;
        }

        const newCompany = {

            id: Date.now(),

            companyName,
            role,
            packageOffered,
            location,
            eligibility,
            vacancies,
            driveDate

        };

        const updatedCompanies = [...companies, newCompany];

        setCompanies(updatedCompanies);

        localStorage.setItem(
            "Companydata",
            JSON.stringify(updatedCompanies)
        );

        setMessage("Company Registered Successfully.");

        setCompanyName("");
        setRole("");
        setPackageOffered("");
        setLocation("");
        setEligibility("");
        setVacancies("");
        setDriveDate("");

        setTimeout(() => {
            navigate("/companies");
        }, 1000);
    }

    return (

        <div className="registration-page">

            <div className="registration-card">

                <h1>Company Registration</h1>

                <form
                    className="company-form"
                    onSubmit={registerCompany}
                >

                    <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) =>
                            setCompanyName(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Job Role"
                        value={role}
                        onChange={(e) =>
                            setRole(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Package Offered"
                        value={packageOffered}
                        onChange={(e) =>
                            setPackageOffered(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) =>
                            setLocation(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Eligibility (CGPA)"
                        value={eligibility}
                        onChange={(e) =>
                            setEligibility(e.target.value)
                        }
                    />

                    <input
                        type="number"
                        placeholder="Vacancies"
                        value={vacancies}
                        onChange={(e) =>
                            setVacancies(e.target.value)
                        }
                    />

                    <input
                        type="date"
                        value={driveDate}
                        onChange={(e) =>
                            setDriveDate(e.target.value)
                        }
                    />

                    <button
                        type="submit"
                        className="register-btn"
                    >
                        Register Company
                    </button>

                </form>

                <p className="message">
                    {message}
                </p>

            </div>

        </div>

    );
}

export default CompanyRegistration;