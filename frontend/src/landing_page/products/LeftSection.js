import React from "react";

function LeftSection({
  imageURL,
  ProductName,
  ProductDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-7 p-3 text-center">
          <img src={imageURL} />
        </div>
        <div className="col p-5 m-5">
          <h2 className="mb-3">{ProductName}</h2>
          <p className="fs-6">{ProductDesc}</p>
          <div className="row my-4">
            <div className="col">
              <a href={tryDemo}>Try demo →</a>
            </div>
            <div className="col">
              <a href={learnMore}>Learn more →</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href={googlePlay}>
                <img src="images/googlePlayBadge.svg" />
              </a>
            </div>
            <div className="col">
              <a href={appStore}>
                <img src="images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
