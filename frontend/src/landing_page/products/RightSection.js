import React from "react";

function RighSection({
  ProductName,
  ProductDesc,
  ArrowLink,
  ArrowLinkTitle,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center p-5 m-5">
          <h2 className="mb-3">{ProductName}</h2>
          <p className="fs-6">{ProductDesc}</p>
          <a href={ArrowLink}>{ArrowLinkTitle} →</a>
        </div>
        <div className="col-7 p-3 text-center">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RighSection;
