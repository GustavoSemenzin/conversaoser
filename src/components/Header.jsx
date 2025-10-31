import { Component } from "react";
import NavBarCustom from "./NavBarCustom";
import LogoSouzeERezende from "/src/assets/brand-logo.png";
function Header() {
  return (
    <div className="h-55 relative bg-[url(../src/assets/nav-bg.png)]  flex  justify-center ">
      <img src={LogoSouzeERezende} alt="" className="h-2/3" />
      <NavBarCustom />
    </div>
  );
}

export default Header;
