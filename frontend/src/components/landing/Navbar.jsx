import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-black text-white tracking-wide hover:scale-105 transition-all duration-300"
        >
          ☕ WFC Manado
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">
          <a
            href="#fitur"
            className="hover:text-amber-400 transition-all duration-300"
          >
            Fitur
          </a>

          <a
            href="#tentang"
            className="hover:text-amber-400 transition-all duration-300"
          >
            Tentang
          </a>

          <a
            href="#cafe"
            className="hover:text-amber-400 transition-all duration-300"
          >
            Cafe
          </a>
        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-xl px-6">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-6">
              Daftar
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;