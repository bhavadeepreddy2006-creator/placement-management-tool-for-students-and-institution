import { Link, useParams } from "react-router-dom";

function CompanyTable({companies}){
    const {id} = useParams();
    return(

        <div>
            {
                companies.length===0 ?
                <h2>No Companies Found</h2>
                :
                <table className="company-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Package</th>
                            <th>Location</th>
                            <th>Eligibility</th>
                            <th>Vacancies</th>
                            <th>Drive Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            companies.map((company,index)=>(
                                <tr key={company.id}>
                                    <td>{index+1}</td>
                                    <td>{company.companyName}</td>
                                    <td>{company.role}</td>
                                    <td>{company.package}</td>
                                    <td>{company.location}</td>
                                    <td>{company.eligibility}</td>
                                    <td>{company.vacancies}</td>
                                    <td>{company.driveDate}</td>
                                    <td>
                                        <Link
                                            className="view-btn"
                                            to={`/Companies/${company.id}`}
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}
export default CompanyTable;