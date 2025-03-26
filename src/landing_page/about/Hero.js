import React from "react";

function Hero() {
  return (
    <div className="container">
    
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center fw-bold text-dark" style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
          "At Equiverse, we don't just break barriers
          <br />
          we build the future of investing, powered by intelligence, innovation, and limitless opportunity."
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
          At Equiverse, we’re on a mission to transform investing by removing traditional barriers. Our platform, founded in 2024-25, leverages cutting-edge AI and technology to provide smarter, more accessible investment tools for all.
          </p>
          <p>
          As CEO, We envisioned a platform that would empower investors with data-driven insights, personalized strategies, and seamless decision-making. By harnessing the power of AI, we're reshaping how people engage with financial markets.
          </p>
          <p>
          Today, Equiverse serves millions of users, contributing significantly to retail trading volumes. We are proud to be at the forefront of making investing both affordable and efficient, thanks to our disruptive pricing models and powerful technology.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
          Our commitment to innovation doesn’t stop with trading. We are continuously evolving our platform and expanding our offerings to ensure that every investor has the resources they need to succeed, from advanced tools to educational content.
          </p>
          <p>
          Through Equiverse Labs, our fintech incubator, we’re investing in and supporting early-stage startups that are disrupting the financial space. We believe in fostering innovation to grow the Indian capital markets and beyond.
          </p>
          <p>
          The future of Equiverse is bright, and we are always striving to integrate the latest advancements in AI and machine learning. Our goal is to continue revolutionizing the investment experience, making it smarter, faster, and more accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
