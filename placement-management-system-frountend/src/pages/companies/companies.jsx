import "./company.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CompanyTable from "../../components/companys/companiestable";

function Companys({ companies, setCompanies }) {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading Companies...</h2>
            </div>
        );
    }

    // Delete Company

    function deleteCompany(id) {

        const updatedCompanies = companies.filter(
            (company) => company.id !== id
        );

        setCompanies(updatedCompanies);

        localStorage.setItem(
            "Companydata",
            JSON.stringify(updatedCompanies)
        );
    }

    // Search Company

    const filteredCompanies = companies.filter((company) =>
        company.companyName.toLowerCase().includes(search.toLowerCase()) ||
        company.role.toLowerCase().includes(search.toLowerCase()) ||
        company.location.toLowerCase().includes(search.toLowerCase()) ||
        company.eligibility.toLowerCase().includes(search.toLowerCase())
    );

    // Registration Page Navigation

    function companyClick() {
        navigate("/companyregistration");
    }

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

                <button
                    className="add-company-btn"
                    onClick={companyClick}
                >
                    + Add New Company
                </button>

                <input
                    className="search-box"
                    type="text"
                    placeholder="Search Company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="company-table-container">

                <CompanyTable
                    companies={filteredCompanies}
                    deleteCompany={deleteCompany}
                />

            </div>

        </div>

    );
}

export default Companys;