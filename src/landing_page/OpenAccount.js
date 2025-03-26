import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Equiverse account</h1>
        <p>
        "Trade for free, pay only for premium insights."
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >

                <a
            href="/signup"
            style={{
              color: "White",
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

export default OpenAccount;
