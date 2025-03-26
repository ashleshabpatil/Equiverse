


import React from 'react';
import { FaRobot, FaChartLine, FaFileInvoiceDollar, FaBriefcase, FaComments, FaBell } from 'react-icons/fa';

const awards = [
  {
    icon: <FaRobot className="display-4 mb-3" />,
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning algorithms analyze market trends and predict stock performance with high accuracy.'
  },
  {
    icon: <FaChartLine className="display-4 mb-3" />,
    title: 'Real-time Market Analysis',
    description: 'Track global markets in real-time with comprehensive data visualization and analytical tools.'
  },
  {
    icon: <FaFileInvoiceDollar className="display-4 mb-3" />,
    title: 'Paper Trading',
    description: 'Practice your trading strategies risk-free with our realistic paper trading simulator.'
  },
  {
    icon: <FaBriefcase className="display-4 mb-3" />,
    title: 'Multi-Asset Portfolio',
    description: 'Invest in stocks, crypto, forex, and commodities all from one unified platform.'
  },
  {
    icon: <FaComments className="display-4 mb-3" />,
    title: 'Community Insights',
    description: 'Connect with other traders, share strategies, and learn from a growing community of investors.'
  },
  {
    icon: <FaBell className="display-4 mb-3" />,
    title: 'Smart Alerts',
    description: 'Receive personalized notifications about market movements and opportunities based on your preferences.'
  }
];

const Awards = () => (
  <section id="awards" className="py-5 bg-light">
    <div className="container text-center">
      <h2 className="mb-4 font-weight-bold">Powerful Features for Smarter Trading</h2>
      <p className="mb-5 text-muted">Our platform combines cutting-edge AI technology with user-friendly tools to help you make better investment decisions.</p>
      <div className="row">
        {awards.map((award, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-4 h-100 shadow-sm border-0 rounded-lg transition-transform hover-translate-y hover-shadow-lg hover-scale">
              <div className="text-primary mb-3" style={{ fontSize: '3rem' }}>{award.icon}</div>
              <h4 className="font-weight-bold mb-2">{award.title}</h4>
              <p className="text-muted">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .hover-scale:hover {
        transform: translateY(-15px);
        box-shadow: 0 4px 40px rgba(0,0,0,0.2);
      }
    `}</style>
  </section>
);

export default Awards;

