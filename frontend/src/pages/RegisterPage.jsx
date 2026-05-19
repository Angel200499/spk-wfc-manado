import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import api from "@/services/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success(
        "Register berhasil! Silakan login."
      );

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Register gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gradient-to-br from-orange-500/20 via-stone-950 to-amber-500/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 max-w-xl px-10">
          <p className="uppercase tracking-[0.4em] text-amber-400 text-sm font-semibold mb-6">
            SPK WFC MANADO
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Bergabung dan
            <span className="text-amber-400">
              {" "}
              Temukan{" "}
            </span>
            Tempat WFC Favoritmu.
          </h1>

          <p className="text-zinc-300 mt-8 text-lg leading-relaxed">
            Buat akun untuk menikmati
            rekomendasi cafe terbaik berbasis
            metode SAW secara realtime sesuai
            prioritas produktivitasmu.
          </p>

          <div className="flex gap-4 mt-10">
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
              <h3 className="text-2xl font-bold text-amber-400">
                Smart
              </h3>
              <p className="text-zinc-300 text-sm mt-1">
                Recommendation
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
              <h3 className="text-2xl font-bold text-amber-400">
                Modern
              </h3>
              <p className="text-zinc-300 text-sm mt-1">
                Dashboard UI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-3xl font-black mx-auto shadow-lg shadow-orange-500/30">
              🚀
            </div>

            <h1 className="text-4xl font-black mt-6">
              Buat Akun
            </h1>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Daftar sekarang dan temukan
              tempat Work From Cafe terbaik
              untuk produktivitasmu.
            </p>
          </div>

          <form
            onSubmit={handleRegister}
            className="mt-10 space-y-5"
          >
            <div>
              <label className="text-sm text-zinc-300 block mb-2">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="masukkan nama"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-amber-400 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300 block mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="masukkan email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-amber-400 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300 block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-amber-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-400 to-amber-500 hover:scale-[1.02] transition-all duration-300 rounded-2xl py-4 font-bold text-stone-950 shadow-xl shadow-orange-500/30 disabled:opacity-50"
            >
              {loading
                ? "Loading..."
                : "Daftar Sekarang"}
            </button>
          </form>

          <div className="mt-8 text-center text-zinc-400">
            Sudah punya akun?
            <button
              onClick={() => navigate("/login")}
              className="text-amber-400 ml-2 hover:text-amber-300 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}