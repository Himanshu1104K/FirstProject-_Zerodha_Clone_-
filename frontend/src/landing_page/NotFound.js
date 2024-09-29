import React from "react";
function NotFound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="my-2">404 Not Found</h2>
        <p className="my-2 mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
