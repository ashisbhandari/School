import React from 'react'
import logo from "../../assets/logo.png";
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footercontent">
                <div className="footercontent-left">
                    <div className="hi">
                        <img src={logo} alt="logo of company" />
                        <p>School</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aperiam quisquam! Recusandae similique ullam commodi enim earum. Aliquid saepe aut deleniti minus? Itaque deleniti consectetur, aliquam dolorem esse ea cupiditate?</p>
                    <div className="footer-social-icons">
                        <FaFacebook size={24} color="#4267B2" />
                        <FaTwitter size={24} color="#1DA1F2" />
                        <FaLinkedin size={24} color="#0077B5" />
                    </div>
                </div>
                <div className="footercontent-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href="/#"><li>Home</li></a>
                        <a href="/#about"><li>About Us</li></a>
                        <a href="/#news"><li>News</li></a>
                        <a href="/#contact"><li>Contact</li></a>
                        <a href="/#gallery"><li>Gallery</li></a>

                    </ul>

                </div>
                <div className="footercontent-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+977 9824*******</li>
                        <li>school@gmail.com</li>
                    </ul>

                </div>
            </div>

            <hr />
            <p className="footer-copyright">Copyright 2025 school.com-All Right Reserved. </p>
        </div>
    )
}

export default Footer
