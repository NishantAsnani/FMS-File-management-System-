import icon from "../public/icon.webp";

function Header() {
  return (
    <header className="bg-white w-full h-20 shadow-lg flex justify items-center">
      <img src={icon} className="h-[95%] ml-[1rem]" alt="" />
    </header>
  );
}


export default Header;