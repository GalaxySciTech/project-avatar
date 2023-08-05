import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar items-center h-20">
      <div className="navbar-start">
        <div className="font-black ml-2"></div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;