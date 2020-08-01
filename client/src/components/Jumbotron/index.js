import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, paddingTop: 120, textAlign: "center", margin: "10px auto" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
