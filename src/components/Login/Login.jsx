import React, { useState } from "react";
import './login.css';
import {IoIosCloseCircle} from 'react-icons/io';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const {signIn} = useAuth();
    const [user, setUser] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(user, () => navigate(fromPage));
    }

    return(
        <form onSubmit={handleSubmit} className="loginContainer">
            <div className="login grid">
                <h3 className="title">
                    Sign In With
                </h3>
                <button className="btn">
                    Google
                </button>
                    <div className="userNameDiv">
                    <label htmlFor="">Enter username</label>
                    <input onChange={(e) => setUser(e.target.value)} name="username" type="text" />
                </div>
                <div className="userPasswordDiv">
                    <label htmlFor="">Enter password</label>
                    <input name="password" type="password" />
                </div>
                <button className="btn" type="submit">Sign In</button>
                <div className="closeForm">
                    <NavLink to="/"><IoIosCloseCircle className="icon" /></NavLink>
                </div>
            </div>
        </form>
    )
}


export default Login