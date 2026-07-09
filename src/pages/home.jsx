import "./home.css"
import NavBar from "../components/navbar/NavBar";
import Heading from "../components/head/head";
import Sidebar from "../components/sidebar/sidebar";
import Dashbord from "../components/dashbord/Dashbord";
import Footer from "../components/Footer/Footer";
import Register from "./registration/Register";
import Login from "./login/login";

function Home(){
    return(
        <div>
            <NavBar name = "Bhavadeep Reddy"/>
            <div className="main">
            <Sidebar/>
            <Dashbord/>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;