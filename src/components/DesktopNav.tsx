import { Moon } from "lucide-react";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center fixed top-6 left-4 right-4 md:left-0 md:right-0 md:max-w-7xl md:mx-auto justify-between bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-2 rounded-2xl mb-20 z-30">
      {" "}
      {/* left nav bar content */}
      <div className="flex gap-2">
        <span>
          <Moon />
        </span>
        <span className="font-bold">Dark Mode Design</span>
      </div>
      {/* middle content */}
      <div className="flex gap-3 ">
        <button className="cursor-pointer hover:bg-slate-500 p-2 hover:rounded-lg">
          About Us
        </button>
        <button className="cursor-pointer hover:bg-slate-500 p-2 hover:rounded-lg">
          Features
        </button>
        <button className="cursor-pointer hover:bg-slate-500 p-2 hover:rounded-lg">
          Pricing
        </button>
      </div>
      {/* right nav bar content */}
      <div className="flex gap-3">
        <button className="cursor-pointer hover:bg-slate-500 p-2 hover:rounded-lg">
          Sign in{" "}
        </button>
        <button className="cursor-pointer hover:bg-slate-500 p-2 hover:rounded-lg">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
