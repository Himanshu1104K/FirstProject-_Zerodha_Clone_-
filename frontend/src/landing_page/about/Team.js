import React from "react";

function Team() {
  return (
    <div className="container mb-5">
      <h1 className="text-center mb-5">People</h1>
      <div className="row px-5 mx-5 mt-5 fs-6">
        <div className="col text-center mt-3 ps-5">
          <img
            src="images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <p className="fs-4 my-2 mt-4">Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
