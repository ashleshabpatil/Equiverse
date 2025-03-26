



import React from 'react';
import { FaCalculator, FaPhoneAlt, FaEnvelope, FaFileInvoice, FaGlobe, FaMoneyBillWave, FaBalanceScale } from 'react-icons/fa';

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: 'none' }}>
            <h3 className="fs-5 d-flex align-items-center justify-content-center">
              <FaCalculator className="me-2" /> Brokerage Calculator
            </h3>
          </a>
          <ul
            style={{ textAlign: 'left', lineHeight: '2', fontSize: '14px' }}
            className="text-muted"
          >
            <li><FaPhoneAlt className="me-2" /> Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li><FaEnvelope className="me-2" /> Digital contract notes will be sent via e-mail.</li>
            <li><FaFileInvoice className="me-2" /> Physical contract notes (if required): ₹20 per note + courier charges.</li>
            <li><FaGlobe className="me-2" /> NRI account (non-PIS): 0.5% or ₹100 per order for equity (lower value applies).</li>
            <li><FaGlobe className="me-2" /> NRI account (PIS): 0.5% or ₹200 per order for equity (lower value applies).</li>
            <li><FaMoneyBillWave className="me-2" /> If account has a debit balance: ₹40 per order (instead of ₹20).</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: 'none' }}>
            <h3 className="fs-5 d-flex align-items-center justify-content-center">
              <FaBalanceScale className="me-2" /> List of Charges
            </h3>
          </a>
          <ul style={{ textAlign: 'left', lineHeight: '2', fontSize: '14px' }} className="text-muted">
            <li>₹0 for account opening and maintenance.</li>
            <li>₹20 per executed intraday order.</li>
            <li>₹20 per F&O trade (flat fee).</li>
            <li>No fees for investments and holdings.</li>
            <li>₹50 for offline/telephonic orders.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

