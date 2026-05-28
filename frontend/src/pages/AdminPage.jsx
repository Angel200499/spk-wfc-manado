import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/AdminLayout";
import { Card } from "@/components/ui/card";

import api from "@/services/api";

import { toast } from "sonner";
import AdminLayout from "@/layouts/AdminLayout";

export default function AdminPage() {
  const [cafes, setCafes] = useState([]);

  const [loading, setLoading] = useState(false);

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    address: "",
    imageUrl: "",
    wifiSpeed: "",
    powerOutlet: "",
    comfort: "",
    noiseLevel: "",
    averagePrice: "",
    openHours: "",
  });

  // =========================
  // GET ALL CAFE
  // =========================

  const fetchCafes = async () => {
    try {
      const response = await api.get("/api/cafes");

      setCafes(response.data);
    } catch (error) {
      console.log(error);

      toast.error("Gagal mengambil data cafe");
    }
  };

  useEffect(() => {
    fetchCafes();
  }, []);

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setForm({
      name: "",
      address: "",
      imageUrl: "",
      wifiSpeed: "",
      powerOutlet: "",
      comfort: "",
      noiseLevel: "",
      averagePrice: "",
      openHours: "",
    });

    setEditId(null);
  };

  // =========================
  // ADD / UPDATE
  // =========================

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        ...form,

        wifiSpeed: Number(form.wifiSpeed),

        powerOutlet: Number(form.powerOutlet),

        comfort: Number(form.comfort),

        noiseLevel: Number(form.noiseLevel),

        averagePrice: Number(form.averagePrice),

        openHours: Number(form.openHours),
      };

      // =====================
      // UPDATE
      // =====================

      if (editId) {
        await api.put(`/cafes/${editId}`, payload);

        toast.success("Cafe berhasil diupdate 🔥");
      }

      // =====================
      // CREATE
      // =====================

      else {
        await api.post("/cafes", payload);

        toast.success("Cafe berhasil ditambahkan ☕");
      }

      fetchCafes();

      resetForm();
    } catch (error) {
      console.log(error);

      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id) => {
    try {
      await api.delete(`/cafes/${id}`);

      toast.success("Cafe berhasil dihapus");

      fetchCafes();
    } catch (error) {
      console.log(error);

      toast.error("Gagal menghapus cafe");
    }
  };

  // =========================
  // EDIT
  // =========================

  const handleEdit = (cafe) => {
    setEditId(cafe.id);

    setForm({
      name: cafe.name,
      address: cafe.address,
      imageUrl: cafe.imageUrl,
      wifiSpeed: cafe.wifiSpeed,
      powerOutlet: cafe.powerOutlet,
      comfort: cafe.comfort,
      noiseLevel: cafe.noiseLevel,
      averagePrice: cafe.averagePrice,
      openHours: cafe.openHours,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    toast.success("Mode edit aktif ✨");
  };

  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* HERO */}

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 p-10 shadow-[0_20px_80px_rgba(251,146,60,0.35)]">
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.4em] text-sm font-bold text-white">
              ADMIN PANEL
            </p>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-5 leading-tight">
              Kelola Cafe
              <br />
              Premium ☕
            </h1>

            <p className="text-white/80 text-lg mt-6 max-w-2xl leading-relaxed">
              CRUD data cafe realtime langsung
              dari database backend Prisma.
            </p>
          </div>
        </div>

        {/* FORM */}

        <Card className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-4xl font-black text-white">
                {editId
                  ? "Edit Cafe"
                  : "Tambah Cafe"}
              </h2>

              <p className="text-zinc-400 mt-2">
                Kelola data cafe realtime
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-5 py-3 rounded-2xl font-black shadow-xl">
              {cafes.length} Cafe
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Cafe"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Alamat"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="wifiSpeed"
              value={form.wifiSpeed}
              onChange={handleChange}
              placeholder="WiFi Speed"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="powerOutlet"
              value={form.powerOutlet}
              onChange={handleChange}
              placeholder="Power Outlet"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="comfort"
              value={form.comfort}
              onChange={handleChange}
              placeholder="Comfort"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="noiseLevel"
              value={form.noiseLevel}
              onChange={handleChange}
              placeholder="Noise Level"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="averagePrice"
              value={form.averagePrice}
              onChange={handleChange}
              placeholder="Average Price"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />

            <input
              type="number"
              name="openHours"
              value={form.openHours}
              onChange={handleChange}
              placeholder="Open Hours"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-[1.02] transition-all duration-300 px-8 py-4 rounded-2xl font-black text-black shadow-2xl"
            >
              {loading
                ? "Loading..."
                : editId
                ? "Update Cafe"
                : "Tambah Cafe"}
            </button>

            {editId && (
              <button
                onClick={resetForm}
                className="bg-white/10 hover:bg-white/20 transition-all px-8 py-4 rounded-2xl font-black text-white"
              >
                Cancel
              </button>
            )}
          </div>
        </Card>

        {/* DATA CAFE */}

        <div>
          <h2 className="text-4xl font-black text-white mb-8">
            Semua Cafe ☕
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cafes.map((cafe) => (
              <Card
                key={cafe.id}
                className="overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={cafe.imageUrl}
                  alt={cafe.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-black text-white">
                    {cafe.name}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {cafe.address}
                  </p>

                  {/* KPI */}

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-400 text-sm">
                        WiFi
                      </p>

                      <h3 className="text-white font-black text-xl">
                        {cafe.wifiSpeed}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-400 text-sm">
                        Comfort
                      </p>

                      <h3 className="text-white font-black text-xl">
                        {cafe.comfort}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-400 text-sm">
                        Outlet
                      </p>

                      <h3 className="text-white font-black text-xl">
                        {cafe.powerOutlet}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-400 text-sm">
                        Harga
                      </p>

                      <h3 className="text-white font-black text-xl">
                        Rp {cafe.averagePrice}
                      </h3>
                    </div>
                  </div>

                  {/* ACTION */}

                  <div className="flex gap-4 mt-7">
                    <button
                      onClick={() =>
                        handleEdit(cafe)
                      }
                      className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all py-3 rounded-2xl font-bold text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(cafe.id)
                      }
                      className="flex-1 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl font-bold text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}