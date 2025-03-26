import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";

function InvestmentOfferings() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="https://source.unsplash.com/random/300x200?stocks"
        productName="Stocks"
        productDesription="Trade stocks for delivery or intraday on over 5000 stocks listed on NSE and BSE."
        tryDemo=""
        learnMore="/stocks"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="https://source.unsplash.com/random/300x200?mutual-funds"
        productName="Direct Mutual Funds"
        productDesription="Invest in over 2000 direct mutual funds without distributor commissions."
        learnMore="/mutual-funds"
      />
      <LeftSection
        imageURL="https://source.unsplash.com/random/300x200?futures-options"
        productName="Futures & Options"
        productDesription="Trade commodities, metals, and stock futures and options on NSE and MCX."
        tryDemo=""
        learnMore="/futures-options"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="https://source.unsplash.com/random/300x200?ipo"
        productName="IPO"
        productDesription="Apply online and invest in companies listing on Indian exchanges with an IPO."
        learnMore="/ipo"
      />
      <LeftSection
        imageURL="https://source.unsplash.com/random/300x200?gift-stocks"
        productName="Gift Stocks"
        productDesription="Gift stocks, ETFs, mutual funds, and gold bonds to your loved ones."
        tryDemo=""
        learnMore="/gift-stocks"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="https://source.unsplash.com/random/300x200?fixed-income"
        productName="Fixed Income"
        productDesription="Invest in bonds with government-guaranteed returns, better than FDs."
        learnMore="/fixed-income"
      />
      <p className="text-center mt-5 mb-5">
        Explore more about our diverse investment options.
      </p>
    </>
  );
}

export default InvestmentOfferings;
