import { useParams } from "react-router-dom";

function CompanyDetails(){

    const {id}=useParams();

    return(

        <div className="company-details">

            <h1>Company Details</h1>

            <h2>Company ID : {id}</h2>

            <p>This page will display complete company information.</p>

        </div>

    );

}

export default CompanyDetails;