let company = [
    {
        companyName : "TCS",
        role : "developer",
        packageOffered : 7.5,
        location : "guntur",
        eligibility : "6CGPA and above",
        vacancies : 30,
        driveDate : "12th May"
    }
]
export function getCompany(req,res){
    res.status(200).json(company);
}