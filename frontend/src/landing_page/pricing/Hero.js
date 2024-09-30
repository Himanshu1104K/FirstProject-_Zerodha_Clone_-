import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="text-center m-5 p-5">
        <h1 style={{ fontSize: "2.75rem" }} className="my-3">
          Charges
        </h1>
        <h5 style={{ color: "#9b9b9b" }}>List of all charges and taxes</h5>
      </div>
      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col">
          <img src="images\pricing0.svg" />
          <h2 className="my-3">Free equity delivery</h2>
          <p style={{ color: "#9b9b9b" }} >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="images\intradayTrades.svg" />
          <h2 className="my-3">Intraday and F&O trades</h2>
          <p style={{ color: "#9b9b9b" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="images\pricing0.svg" />
          <h2 className="my-3">Free direct MF</h2>
          <p style={{ color: "#9b9b9b" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
