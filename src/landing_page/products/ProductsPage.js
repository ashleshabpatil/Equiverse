


import React from "react";
import { FaChartBar, FaCalculator, FaNewspaper, FaLaptopCode, FaRobot, FaChartLine, FaFileInvoiceDollar, FaBriefcase, FaComments, FaBell } from "react-icons/fa";

function PricingPage() {
  return (
    <div>
      <br/>
      <br/>
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-6">Advanced Tools for Every Trader</h1>
            <p className="text-lg text-neutral-600">
              Whether you're a beginner or a professional investor, our platform offers the tools you need to succeed.
            </p>
          </div>
<br/>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card p-4 h-100 shadow-sm border-0 rounded-lg transition-transform hover-translate-y hover-shadow-lg hover-scale">
                  <div className="text-primary mb-3" style={{ fontSize: '5rem' }}>{feature.icon}</div>
                  <h3 className="font-weight-bold mb-2">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
      .hover-scale:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 40px rgba(0,0,0,0.2);
      }
    `}</style>
      </section>
    </div>
  );
}

const features = [
  { title: "Advanced Charting", description: "Access technical indicators, drawing tools, and customizable chart layouts.", icon: <FaChartBar /> },
  { title: "Risk Management Tools", description: "Calculate position sizing, set stop-loss levels, and analyze risk-reward ratios.", icon: <FaCalculator /> },
  { title: "News & Analysis", description: "Stay informed with real-time news, sentiment analysis, and market updates.", icon: <FaNewspaper /> },
  { title: "Strategy Backtesting", description: "Test trading strategies against historical data to validate performance.", icon: <FaLaptopCode /> },
  { title: "AI-Powered Predictions", description: "Advanced machine learning algorithms analyze market trends and predict stock performance.", icon: <FaRobot /> },
  { title: "Real-time Market Analysis", description: "Track global markets in real-time with comprehensive data visualization.", icon: <FaChartLine /> },
  { title: "Paper Trading", description: "Practice your trading strategies risk-free with our paper trading simulator.", icon: <FaFileInvoiceDollar /> },
  { title: "Multi-Asset Portfolio", description: "Invest in stocks, crypto, forex, and commodities from one platform.", icon: <FaBriefcase /> },
  { title: "Community Insights", description: "Connect with other traders, share strategies, and learn from a growing community.", icon: <FaComments /> }
  
];

export default PricingPage;
