import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"

function Sidebar(){
    return(
        <div className="leftbar">
            <ul>
                <NavLink to="/dashboard"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Dashboard</li>
                </NavLink>
                <NavLink to="/student"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Student</li>
                </NavLink>
                <NavLink to="/Companies"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Companies</li>
                </NavLink>
                <NavLink to="drive"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Drive's</li>
                </NavLink>
                <NavLink to="report"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Reports</li>
                </NavLink>
                <NavLink to="settings"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Settings</li>
                </NavLink>
                <NavLink to="login"
                className = {({isActive})=>
                    isActive ? "active":""    
                }
                >
                <li>Logout</li>
                </NavLink>
            </ul>
        </div>
    )
}
export default Sidebar;