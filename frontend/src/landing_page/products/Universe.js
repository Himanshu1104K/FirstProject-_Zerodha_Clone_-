import React from "react";
function Universe() {
  return (
    <div className="contanier text-center" style={{color:"#424242"}}>
      <div className="row fs-4 m-5 p-5">
        <p>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="row">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col"></div>
          <div className="col  my-3 px-4 d-flex justify-content-center flex-column align-items-center">
            <img src="images\zerodhaFundhouse.png" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col my-3 px-4  d-flex justify-content-center flex-column align-items-center">
            <img src="images\sensibullLogo.svg" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col my-3 px-4  d-flex justify-content-center flex-column align-items-center">
            <img src="images\zerodhaFundhouse.png" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col my-3 px-4  d-flex justify-content-center flex-column align-items-center">
            <img src="images\streakLogo.png" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col my-3 px-4  d-flex justify-content-center flex-column align-items-center">
            <img src="images\smallcaseLogo.png" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col my-3 px-4   d-flex justify-content-center flex-column align-items-center">
            <img src="images\dittoLogo.png" style={{ width: "85%" }} />
            <p className="my-4" style={{ fontSize: "12px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col"></div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
