import React from "react";

function FetchError(props) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error connecting with server :(</h4>
        <p>
          This is a tipically fetching error, trying refreshing the page, or contact with our support community.
        </p>
        <hr />
        <p className="mb-0">{props.message}</p>
      </div>
    </div>
  );
}

export default FetchError;
