import React from "react";

function Hero() {
  return (
    <div className="container p-2 mb-1"style={{ backgroundColor: "#faf9f8" }}>
      <div className="row text-center">
      
        <img src="media/images/HOMEHERO (2).png" alt="Hero img" className="mb-5" />
        <h1 className="mt-5">Equiverse</h1>
        <h3 style={{ letterSpacing: "9px" }}>YOUR MARKET, YOUR RULES!</h3>
        <p>
        Take charge of your trades with real-time insights, low fees, and a seamless experience—because in Equiverse, Your Market, Your Rules!
        </p>

<button
  className="p-2 btn btn-primary fs-5 mb-5"
  style={{
    width: "20%",
    margin: "0 auto",
    backgroundColor: "#fcff59",
    borderRadius: "30px",
    border: "none",
    padding: "40px 50px",
    fontWeight: "bold",
  }}
>
  <a
    href="/signup"
    style={{
      color: "black",
      textDecoration: "none",
    }}
  >
    SIGNUP NOW
  </a>
</button>

      </div>
    </div>
  );
}

export default Hero;
