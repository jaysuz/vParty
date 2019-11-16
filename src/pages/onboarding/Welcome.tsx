import React from "react";
import logo from "../../img/logo.png";

const Welcome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo} style={{ width: 170, marginTop: "20vh" }} />
      <div style={{ marginTop: "20vh" }}>
        <h1 style={{ fontWeight: "bold", fontSize: 24 }}>
          Organise your Party
        </h1>
        <p style={{ fontSize: 18, padding: "0px 50px" }}>
          Use vParty to organise and purchase all your items together
        </p>
      </div>
    </div>
  );
};
export default Welcome;
