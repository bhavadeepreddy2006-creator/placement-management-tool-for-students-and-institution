import { Link, useNavigate } from "react-router-dom";
import Home from "../home/home";
import Register from "../registration/Register";
import "./login.css"
import { use, useState } from "react";

function Login(){
    const [isLoggedIn,setisLoggedIn] = useState(false);
    const [StudentName,SetStudentName] = useState("");
    const [email,setemail] = useState("");
    const [Phone,setphone] = useState("");
    const [Branch,setbranch] = useState("");
    const [Password,setpassword] = useState("");
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [showpassword,setshowpassword] = useState(false);
    const [message,setmessage] = useState("");
    const [Loading,setLoading] = useState(false);
    const navigate = useNavigate();

    function handleLogin() {
        setLoading(true);
        setTimeout(()=>{
            if (
            email === "admin@gmail.com" 
            &&
            Password === "admin@123"
        ) {
            setmessage(" Login Successful");
            setisLoggedIn(true);
        } else {
            setmessage("Invalid Email or Password");
        }
        setLoading(false);

        },2000)

        
    }

    if(isLoggedIn){
        sessionStorage.setItem("isLoggedIn","true");
        navigate("/dashboard");
    }

    return(
        <>
           {
            // isLoggedIn ? (
                    // {/* <Home/> */}
                    // navigate("/Dashbard")
            // ) : (

                <div className="login-container">

                    <div className="login-card">

                        <h1 className="login-title">
                            Placement Management Login
                        </h1>
                        <h2 className="login-message">
                            Please Login
                        </h2>
                        <input
                            className="login-input"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />

                        <input
                            className="login-input"
                            type={showpassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={Password}
                            onChange={(e) => setpassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="login-btn"
                            onClick={() => setshowpassword(!showpassword)}
                        >
                            {showpassword ? "Hide Password" : "Show Password"}
                        </button>
                        {
                            Loading ?

                                <button
                                    className="login-btn"
                                    disabled
                                >
                                    Loading...
                                </button>

                                :

                                <button
                                    className="login-btn"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                        }
                        <Link to="/registration">
                            <h3>Sign up</h3>            
                        </Link>

                        <p className="login-status">
                            {message}
                        </p>

                    </div>

                </div>

            // )
        }
    </>
    );
}
export default Login;
