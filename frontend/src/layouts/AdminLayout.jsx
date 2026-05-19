import { Link, useNavigate } from "react-router-dom";

export default function AdminLayout({
  children,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-stone-950 flex">
      {/* SIDEBAR */}
      <aside className="w-72 bg-black border-r border-white/10 p-6 sticky top-0 h-screen">
        <h1 className="text-3xl font-black text-white mb-10">
          ⚡ ADMIN
        </h1>

        <div className="space-y-4">
          <Link
            to="/admin"
            className="block bg-orange-500 hover:bg-orange-600 transition-all px-5 py-4 rounded-2xl text-white font-bold"
          >
            Dashboard Admin
          </Link>

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
}