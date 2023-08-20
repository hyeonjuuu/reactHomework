import NavButton from "./NavButton";

function Nav() {
  return (
    <div className=" mx-auto flex justify-center gap-2 pb-2">
      <NavButton text="Main" />
      <NavButton text="Contact Us" />
    </div>
  );
}

export default Nav;
