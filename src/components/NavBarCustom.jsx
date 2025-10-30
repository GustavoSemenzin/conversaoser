import NavButton from "./NavButton";

function NavBarCustom({ buttons }) {
  return (
    <div className="bg-green-900 h-1/4 absolute bottom-0 left-0 w-full flex flex-row">
      {buttons.map((button, index) => (
        <NavButton name={button.name} position={button.goTo} key={index} />
      ))}

      <div className="ml-auto flex items-center justify-center px-6 rounded  cursor-pointer  hover:bg-green-950">
        <p>Fale agora com a Souza & Rezende</p>
      </div>
    </div>
  );
}

export default NavBarCustom;
