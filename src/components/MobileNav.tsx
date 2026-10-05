import { useState } from "react";
import { Moon, Menu, X } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`md:hidden fixed top-6 left-4 right-4 p-4 rounded-2xl z-40 border border-zinc-800 ${
        open ? "bg-zinc-900" : "bg-zinc-900/50 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Moon size={20} />
          <span className="font-bold">Dark Mode Design</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="cursor-pointer"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col  gap-4 mt-5 pt-5 border-t border-slate-800">
          <div className="flex flex-col items-center gap-3 w-full">
            <button className="hover:bg-slate-600 w-full text-center p-3 rounded-md cursor-pointer ">
              About Us
            </button>
            <button className="hover:bg-slate-600 w-full text-center p-3 rounded-md cursor-pointer ">
              Features
            </button>
            <button className="hover:bg-slate-600 w-full text-center p-3 rounded-md cursor-pointer ">
              Pricing
            </button>
          </div>

          <div className="flex justify-around gap-3 pt-3 border-t border-slate-800">
            <button className="cursor-pointer hover:bg-slate-600 w-full rounded-md p-3">
              Sign in
            </button>
            <button className="cursor-pointer hover:bg-slate-600 w-full rounded-md p-3">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
