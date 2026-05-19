import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import api from "@/services/api";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE LOGIN
  // =========================

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // =========================
      // HAPUS SESSION LAMA
      // =========================

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // =========================
      // REQUEST LOGIN
      // =========================

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      const token = response?.data?.token;

      const user = response?.data?.user;

      console.log(
        "LOGIN RESPONSE:",
        response.data
      );

      console.log("ROLE USER:", user?.role);

      // =========================
      // VALIDASI
      // =========================

      if (!token || !user) {
        toast.error("Data login tidak valid");
        return;
      }

      // =========================
      // SIMPAN SESSION
      // =========================

      localStorage.setItem("token", token);

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      toast.success("Login berhasil!");

      // =========================
      // ROLE
      // =========================

      const role = user?.role
        ?.trim()
        ?.toUpperCase();

      console.log("FINAL ROLE:", role);

      // =========================
      // REDIRECT
      // =========================

      if (role === "ADMIN") {
        window.location.href = "/admin";
      } else {
        window.location.href =
          "/dashboard";
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex overflow-hidden">
      {/* LEFT SIDE */}

      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gradient-to-br from-amber-500/20 via-stone-950 to-orange-500/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 max-w-xl px-10">
          <p className="uppercase tracking-[0.4em] text-amber-400 text-sm font-semibold mb-6">
            SPK WFC MANADO
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Temukan Cafe
            <span className="text-amber-400">
              {" "}
              Terbaik{" "}
            </span>
            Untuk Produktivitasmu.
          </h1>

          <p className="text-zinc-300 mt-8 text-lg leading-relaxed">
            Sistem Pendukung Keputusan
            berbasis metode SAW untuk
            membantu mahasiswa,
            freelancer, dan remote worker
            menemukan tempat Work From Cafe
            paling kondusif di Manado.
          </p>

          <div className="flex gap-4 mt-10">
            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
              <h3 className="text-2xl font-bold text-amber-400">
                20+
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Cafe Terbaik
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
              <h3 className="text-2xl font-bold text-amber-400">
                Realtime
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Ranking SAW
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl font-black mx-auto shadow-lg shadow-amber-500/30">
              ☕
            </div>

            <h1 className="text-4xl font-black mt-6">
              Selamat Datang
            </h1>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Login untuk menemukan tempat
              Work From Cafe terbaik sesuai
              kebutuhan produktivitasmu.
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-5"
          >
            <div>
              <label className="text-sm text-zinc-300 block mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300 block mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-400 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-[1.02] transition-all duration-300 rounded-2xl py-4 font-bold text-stone-950 shadow-xl shadow-orange-500/30 disabled:opacity-50"
            >
              {loading
                ? "Loading..."
                : "Login Sekarang"}
            </button>
          </form>

          <div className="mt-8 text-center text-zinc-400">
            Belum punya akun?

            <button
              onClick={() =>
                navigate("/register")
              }
              className="text-amber-400 ml-2 hover:text-amber-300 transition-all"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}