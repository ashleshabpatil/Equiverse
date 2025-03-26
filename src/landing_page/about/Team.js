import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">Team</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/us.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Ashlesha Patil &  Dhruv Jha</h4>
          <h6>Founders, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>

          Ashlesha Patil co-founded Equiverse in 2024-25 to make investing smarter and more accessible using AI. She is passionate about helping investors overcome challenges. Outside work, Ashlesha enjoys mindful walking, which helps her stay focused and grounded.          </p>
          <p>
           Dhruv Jha is the tech visionary behind Equiverse, driving innovation to simplify investing for all. He’s passionate about photography, capturing moments that inspire creativity and fresh perspectives.          </p>
          <p>
            Connect on <a href="">Homepage</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
