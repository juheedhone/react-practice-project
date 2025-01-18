import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex  justify-between">
      <Image src={"/dailyHabitsLogo.svg"} alt="logo" height={100} width={100} />
      <div className="space-x-2">
        <button className="text-black rounded-lg text-sm px-5 py-2.5 ">
          Login
        </button>
        <button className="text-black bg-[#F3BC00] border border-black border-b-4 rounded-lg text-sm px-5 py-2.5">
          Start Today
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
