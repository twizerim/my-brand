
import React from "react";
import "./plerloard.css"
import StarLogo from "./logo";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader_logo">
        <StarLogo className="preloader_logo-logo"/>
      </div>
    </div>
  );
};

export default Preloader;