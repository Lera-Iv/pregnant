import React, { useState } from "react";
import './navbar.css';
import { FaBabyCarriage } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { CgMenuGridO } from 'react-icons/cg';
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const {signOut} = useAuth();
    const navigate = useNavigate();

    const showNavbar = () => {
        setActive('navBar activeNavbar');
    }

    const removeNavbar = () => {
        setActive('navBar');
    }

    const [transparent, setTransparent] = useState('header');
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader')
        } else {
            setTransparent('header')
        }
    }

    window.addEventListener('scroll', addBg);

    return (
        <>
            <section className="navBarSection">
                <header className={transparent}>
                    <div className="logoDiv">
                        <Link to="/" className="logo">
                            <h1 className="flex"><FaBabyCarriage className="icon" />
                                Gide</h1>
                        </Link>
                    </div>
                    <div className={active}>
                        <ul className="navList flex">
                            <li className="navItem">
                                <Link to="/" className="navLink">Home</Link>
                            </li>

                            <li className="navItem">
                                <NavLink to="/chek-list" className="navLink">Check-list</NavLink>
                            </li>

                            <li className="navItem">
                                <NavLink to="/about" className="navLink">Resources</NavLink>
                            </li>

                            <li className="navItem">
                                <NavLink to="/contacts" className="navLink">Contacts</NavLink>
                            </li>

                            <li className="navItem">
                                <NavLink to="/blog" className="navLink">Blog</NavLink>
                            </li>

                            <div className="headerBtns flex">
                                <button className="btn loginBtn">
                                    <Link to="/login">Login</Link>
                                </button>

                                <button onClick={() => signOut(() => navigate('/', {replace: true}))} className="btn signUpBtn">
                                    <a href="#">Log Out</a>
                                </button>
                            </div>
                        </ul>

                        <div onClick={removeNavbar} className="closeNavbar">
                            <IoIosCloseCircle className="icon" />
                        </div>
                    </div>
                    <div onClick={showNavbar} className="toggleNavbar">
                        <CgMenuGridO className="icon" />
                    </div>
                </header>
            </section>
        </>

    )
}

export default Navbar