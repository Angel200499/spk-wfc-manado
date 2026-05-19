import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logout berhasil");

    navigate("/login");
  };

  return (
    <div className="flex bg-stone-950 min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-72 h-screen sticky top-0 bg-black border-r border-white/10 p-6 flex flex-col">
        <div>
          <h1 className="text-3xl font-black text-white mb-10">
            ☕ WFC
          </h1>

          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="block bg-white/5 hover:bg-amber-500 hover:text-black transition-all px-5 py-4 rounded-2xl text-white font-semibold"
            >
              Dashboard
            </Link>

            <Link
              to="/recommendation"
              className="block bg-white/5 hover:bg-amber-500 hover:text-black transition-all px-5 py-4 rounded-2xl text-white font-semibold"
            >
              Recommendation
            </Link>

            <Link
              to="/ranking"
              className="block bg-white/5 hover:bg-amber-500 hover:text-black transition-all px-5 py-4 rounded-2xl text-white font-semibold"
            >
              Ranking
            </Link>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-auto pt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 transition-all px-5 py-4 rounded-2xl text-white font-bold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;