import { Link } from "react-router-dom";
import CompanyTable from "./companiestable";

function CompanyList() {

    const companies = [

        {
            id: 1,
            companyName: "TCS",
            role: "Software Engineer",
            package: "7 LPA",
            location: "Hyderabad",
            eligibility: "7.0 CGPA",
            vacancies: 120
        },

        {
            id: 2,
            companyName: "Infosys",
            role: "System Engineer",
            package: "6 LPA",
            location: "Bangalore",
            eligibility: "6.5 CGPA",
            vacancies: 80
        }

    ];

    return (

        <div className="company-page">

    <div className="company-header">

        <div className="company-heading">

            <h1 className="company-title">
                Company Management
            </h1>

            <p className="company-subtitle">
                Manage all registered companies here.
            </p>

        </div>

        <Link to="/companyregistration">

            <button className="add-company-btn">
                + Add New Company
            </button>

        </Link>

    </div>

    <div className="company-table-container">

        <CompanyTable companies={companies}/>

    </div>

</div>
    );
}
export default CompanyList;