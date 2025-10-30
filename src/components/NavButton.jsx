function NavButton({ name, position }) {
  return (
    <div
      className="cursor-pointer basis-1/12 flex items-center justify-center hover:bg-green-950"
      onClick={() => {
        console.log("indo para " + position);
      }}
    >
      <p>{name}</p>
    </div>
  );
}
export default NavButton;
