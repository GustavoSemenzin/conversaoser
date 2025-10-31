function NavButton({ name, goTo }) {
  return (
    <div
      className="cursor-pointer basis-1/12 flex items-center justify-center hover:bg-green-950 invisible lg:visible"
      onClick={() => {
        console.log(goTo);

        document.getElementById(goTo).scrollIntoView({ behavior: "smooth" });
      }}
    >
      <p>{name}</p>
    </div>
  );
}
export default NavButton;
