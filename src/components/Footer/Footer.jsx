import React from "react";
import './footer.css';
import { FaBabyCarriage } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <a href="#" className="logo flex">
                        <h1 className="flex"><FaBabyCarriage className="icon" />
                            Gide</h1> 
                        </a>
                    </div>

                    <div className="socials flex">
                        <FaFacebookF className="icon"/>
                        <BsTwitter className="icon"/>
                        <RiInstagramFill className="icon"/>
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Contact Us</span>
                    <span className="phone">+37544 223 45 66</span>
                    <span className="email">pregnant99@gmail.com</span>
                </div>
                
                
                <div className="footerLinks">
                
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <NavLink to="/contacts" className="">Contacts</NavLink>
                    </li>
                    <li>
                        <a href="" className="">Support</a>
                    </li>
                    <li>
                        <a href="" className="">Privacy</a>
                    </li>
                    <li>
                        <a href="" className="">Settings</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <NavLink to="/" className="">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chek-list" className="">Check-list</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="">AboutUs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="">Blog</NavLink>
                    </li>

                    
                </div>
                
            </div>
        </div>
    )
}

export default Footer