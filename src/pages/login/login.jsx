import Home from "../home";
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

    function handleLogin() {
        setLoading(true);
        setTimeout(()=>{
            if (
            email === "admin@gmail.com" &&
            Password === "admin123"
        ) {
            setmessage(" Login Successful");
            setisLoggedIn(true);
        } else {
            setmessage("Invalid Email or Password");
        }
        setLoading(false);

        },2000)

        
    }

    return(
        <>
           {
            isLoggedIn ? (

                <div className="app-body">
                    <Home/>
                </div>

            ) : (

                <div className="login-container">

                    <div className="login-card">

                        <h1 className="login-title">
                            Placement Management Login
                        </h1>

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
                            className="show-password-btn"
                            onClick={() => setshowpassword(!showpassword)}
                        >
                            {showpassword ? "Hide Password" : "Show Password"}
                        </button>

                        <h2 className="login-message">
                            Please Login
                        </h2>

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

                        <p className="login-status">
                            {message}
                        </p>

                    </div>

                </div>

            )
        }
    </>
    );
}
export default Login;
