import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../navbar/NavBar";
import Sidebar from "../sidebar/sidebar";
import "./layout.css"

function Layout(){
    return(
        <>
        <div className="body">
            <NavBar name = "Bhavadeep Reddy"/>
            <div className="main">
                <Sidebar/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default Layout;