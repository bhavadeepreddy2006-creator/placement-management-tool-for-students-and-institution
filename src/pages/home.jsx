import "./home.css"
import NavBar from "../components/NavBar";
import Heading from "../components/head";
import Sidebar from "../components/sidebar/sidebar";
import Dashbord from "../components/dashbord/Dashbord";
import Footer from "../components/Footer/Footer";

function Home(){
    return(
        <div>
            <NavBar/>
            <Heading/>
            <div className="main">
            <Sidebar/>
            <Dashbord/>
            </div>
            <Footer/>            
        </div>
    )
}
export default Home;