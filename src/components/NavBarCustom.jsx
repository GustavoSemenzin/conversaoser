import NavButton from "./NavButton";

function NavBarCustom() {
  const buttons = [
    { name: "Nossa Historia", goTo: "OurHistory" },
    { name: "Produtos", goTo: "MainProducts" },
    { name: "Parceiros", goTo: "BusinessPartner" },
    { name: "Onde Estamos", goTo: 0.0 },
    { name: "Contato", goTo: 0.0 },
  ];
  return (
    <div className="bg-green-900 h-1/4 absolute bottom-0 left-0 w-full flex flex-row ">
      {buttons.map((button, index) => (
        <NavButton
          name={button.name}
          goTo={button.goTo}
          key={index}
          className
        />
      ))}

      <div className="ml-auto  items-center justify-center px-6 rounded  cursor-pointer  hover:bg-green-950 hidden lg:flex">
        <p>Fale agora com a Souza & Rezende</p>
      </div>
    </div>
  );
}

export default NavBarCustom;
