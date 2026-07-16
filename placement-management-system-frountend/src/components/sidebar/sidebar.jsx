import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css"

function Sidebar(){
    const navigate = useNavigate();

    function logout(){
        sessionStorage.removeItem("isLoggedIn");
        navigate("/")
    }

    return(
        <div className="leftbar">
            <ul>
                <NavLink to="/dashboard"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Dashboard
                </NavLink>

                <NavLink to="/student"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Student
                </NavLink>

                <NavLink to="/Companys"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Companies
                </NavLink>

                <NavLink to="drive"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Campus Drive's
                </NavLink>

                <NavLink to="report"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Reports
                </NavLink>

                <NavLink to="settings"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                Settings
                </NavLink>

                {/* <NavLink to="login"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                > */}
                <button
                    className="logout-btn"
                    onClick={logout}
                    >
                Logout
                </button>
                {/* </NavLink> */}
            </ul>
        </div>
    )
}
export default Sidebar;