import "./dashbord.css";

function Dashbord(){
    return(
        <div className="dashboard">
            <div className="cards">
                <div className="card">
                    <h2>250</h2>
                    <p>Total Studets</p>
                </div>
                <div className="card">
                    <h2>35</h2>
                    <p>Comanies</p>
                </div>
                <div className="card">
                    <h2>180</h2>
                    <p>Placed</p>
                </div>
                <div className="card">
                    <h2>70</h2>
                    <p>Pending</p>
                </div>
            </div>
        </div>
    )
}
export default Dashbord;