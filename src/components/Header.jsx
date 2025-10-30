import { Component } from "react";
import NavBarCustom from "./NavBarCustom";
function Header() {
  const buttonsArray = [
    { name: "Nossa Historia", goTo: 0.0 },
    { name: "Produtos", goTo: 0.0 },
    { name: "Onde Estamos", goTo: 0.0 },
    { name: "Parceiros", goTo: 0.0 },
    { name: "Contato", goTo: 0.0 },
  ];
  return (
    <div className="h-55 relative bg-[url(../src/assets/nav-bg.png)]  flex  justify-center ">
      <img src="../src/assets/brand-logo.png" alt="" className="h-2/3" />
      <NavBarCustom buttons={buttonsArray}></NavBarCustom>
    </div>
  );
}

export default Header;
