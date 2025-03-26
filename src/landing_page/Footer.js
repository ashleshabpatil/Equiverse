import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimesCircle, FaRocket, FaChartLine, FaUsers, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.png" style={{ width: "50%" }} />
      
            <p className="text-neutral-400 mb-4">
              Making smart investing accessible to everyone with AI-powered tools and community insights.
            </p>
            <p>
              &copy; 2024 - 2025, Equiverse Broking Ltd. All rights reserved.
            </p>

                  {/* Social Icons */}
      <div className="flex space-x-4 justify-center mt-5">
        <a href="#" className="text-neutral-400 hover:text-primary">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-neutral-400 hover:text-primary">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-neutral-400 hover:text-primary">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-neutral-400 hover:text-primary">
          <FaLinkedin size={24} />
        </a>
      </div>



          </div>
          <div className="col">
            <p>Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/product">Products</a>
            <br />
            <a href="/pricing">Pricing</a>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="/support">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            
          </div>
          <div className="col">
            <p>Account</p>
            <a href="/signup">Open an account</a>
            <br />
            
          </div>
        </div>
        
      </div>

      <br/>
      <br/>
      <br/>

    </footer>
  );










}

export default Footer;
