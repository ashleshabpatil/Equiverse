import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimesCircle, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

function Hero() {
  return (
    
    <div className="container py-5">
      <h2 className="text-center mb-5">Pricing Plans</h2>
      <div className="row">
        {/* Free Plan */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-header bg-primary text-white text-center">
              <h3>Free</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">₹0 / month</h4>
              <p>Get started with basic tools</p>
              <ul className="list-unstyled">
                <li><FaRocket className="text-success me-2" /> Basic market data</li>
                <li><FaChartLine className="text-success me-2" /> Limited paper trading</li>
                <li><FaUsers className="text-success me-2" /> Standard charting tools</li>
                <li><FaTimesCircle className="text-danger me-2" /> AI predictions</li>
                <li><FaTimesCircle className="text-danger me-2" /> Advanced analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gold Plan */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-header bg-warning text-dark text-center">
              <h3>Gold</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">₹499 / month</h4>
              <p>For active traders</p>
              <ul className="list-unstyled">
                <li><FaRocket className="text-success me-2" /> Everything in Free</li>
                <li><FaChartLine className="text-success me-2" /> Basic AI predictions</li>
                <li><FaUsers className="text-success me-2" /> Unlimited paper trading</li>
                <li><FaCheckCircle className="text-success me-2" /> Advanced charting tools</li>
                <li><FaCheckCircle className="text-success me-2" /> Community access</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-header bg-danger text-white text-center">
              <h3>Premium</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">₹2000 / month</h4> 
              <p>For professional investors</p>
              <ul className="list-unstyled">
                <li><FaRocket className="text-success me-2" /> Everything in Gold</li>
                <li><FaChartLine className="text-success me-2" /> Advanced AI predictions</li>
                <li><FaUsers className="text-success me-2" /> Portfolio optimization</li>
                <li><FaCheckCircle className="text-success me-2" /> Real-time alerts</li>
                <li><FaCheckCircle className="text-success me-2" /> Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



    






  );
}

export default Hero;




