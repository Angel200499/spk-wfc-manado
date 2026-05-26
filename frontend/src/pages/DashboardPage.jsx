import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

import { calculateSAW } from "@/services/sawService";

export default function DashboardPage() {
  const [cafes, setCafes] = useState([]);

  const [weights, setWeights] = useState({
    wifiWeight: 0.3,
    outletWeight: 0.2,
    comfortWeight: 0.2,
    noiseWeight: 0.1,
    priceWeight: 0.1,
    hoursWeight: 0.1,
  });

  // =========================
  // FETCH SAW
  // =========================

 const fetchSAW = async () => {
  try {

    // =========================
    // TOTAL BOBOT
    // =========================

    const totalWeight =
      weights.wifiWeight +
      weights.outletWeight +
      weights.comfortWeight +
      weights.noiseWeight +
      weights.priceWeight +
      weights.hoursWeight;

    // =========================
    // JIKA SEMUA 0
    // =========================

    if (totalWeight === 0) {

      // tetap tampilkan data
      const data = await calculateSAW({
        wifiWeight: 0,
        outletWeight: 0,
        comfortWeight: 0,
        noiseWeight: 0,
        priceWeight: 0,
        hoursWeight: 0,
      });

      setCafes(data);

      return;
    }

    // =========================
    // NORMALISASI
    // =========================

    const normalizedWeights = {
      wifiWeight:
        weights.wifiWeight / totalWeight,

      outletWeight:
        weights.outletWeight / totalWeight,

      comfortWeight:
        weights.comfortWeight / totalWeight,

      noiseWeight:
        weights.noiseWeight / totalWeight,

      priceWeight:
        weights.priceWeight / totalWeight,

      hoursWeight:
        weights.hoursWeight / totalWeight,
    };

    // =========================
    // FETCH
    // =========================

    const data = await calculateSAW(
      normalizedWeights
    );

    setCafes(data);

  } catch (error) {

    console.log(error);
  }
};

useEffect(() => {
  fetchSAW();
}, [weights]);

  // =========================
  // HANDLE SLIDER
  // =========================

  const handleSlider = (key, value) => {
    setWeights((prev) => ({
      ...prev,
      [key]: value[0] / 100,
    }));
  };

  const top3 = cafes.slice(0, 3);

  return (
    <DashboardLayout>
      <div className="space-y-14">
        {/* HERO */}

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-amber-300 via-orange-500 to-yellow-500 p-10 lg:p-14 shadow-[0_25px_100px_rgba(251,191,36,0.35)]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.5em] text-sm font-black text-stone-900">
              SPK WFC MANADO
            </p>

            <h1 className="text-5xl lg:text-7xl font-black text-stone-950 mt-5 leading-tight">
              Temukan Tempat
              <br />
              Work From Cafe
              <br />
              Terbaik ☕
            </h1>

            <p className="max-w-2xl text-stone-900/80 text-lg mt-6 font-semibold leading-relaxed">
              Sistem Pendukung Keputusan berbasis metode SAW
              untuk membantu mahasiswa, freelancer, dan remote
              worker menemukan cafe paling ideal di Manado.
            </p>
          </div>
        </div>

        {/* SLIDER */}

        <div className="mt-20">
          <h2 className="text-4xl font-black text-white mb-8">
            Atur Prioritas 🔥
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WIFI */}

            <Card className="p-7 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="flex justify-between mb-5">
                <h2 className="text-white text-xl font-black">
                  WiFi
                </h2>

                <span className="text-amber-400 font-black text-xl">
                  {Math.round(weights.wifiWeight * 100)}%
                </span>
              </div>

              <Slider
                value={[weights.wifiWeight * 100]}
                min={0}
                max={100}
                step={1}
                className="cursor-pointer"
                onValueChange={(value) =>
                  handleSlider("wifiWeight", value)
                }
              />

              <div className="flex justify-between mt-3 text-sm text-zinc-500">
                <span>0</span>
                <span>100</span>
              </div>
            </Card>

            {/* HARGA */}

            <Card className="p-7 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="flex justify-between mb-5">
                <h2 className="text-white text-xl font-black">
                  Harga
                </h2>

                <span className="text-amber-400 font-black text-xl">
                  {Math.round(weights.priceWeight * 100)}%
                </span>
              </div>

              <Slider
                value={[weights.priceWeight * 100]}
                min={0}
                max={100}
                step={1}
                className="cursor-pointer"
                onValueChange={(value) =>
                  handleSlider("priceWeight", value)
                }
              />

              <div className="flex justify-between mt-3 text-sm text-zinc-500">
                <span>0</span>
                <span>100</span>
              </div>
            </Card>

            {/* COMFORT */}

            <Card className="p-7 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="flex justify-between mb-5">
                <h2 className="text-white text-xl font-black">
                  Kenyamanan
                </h2>

                <span className="text-amber-400 font-black text-xl">
                  {Math.round(weights.comfortWeight * 100)}%
                </span>
              </div>

              <Slider
                value={[weights.comfortWeight * 100]}
                min={0}
                max={100}
                step={1}
                className="cursor-pointer"
                onValueChange={(value) =>
                  handleSlider("comfortWeight", value)
                }
              />

              <div className="flex justify-between mt-3 text-sm text-zinc-500">
                <span>0</span>
                <span>100</span>
              </div>
            </Card>

            {/* STOPKONTAK */}

            <Card className="p-7 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="flex justify-between mb-5">
                <h2 className="text-white text-xl font-black">
                  Stopkontak
                </h2>

                <span className="text-amber-400 font-black text-xl">
                  {Math.round(weights.outletWeight * 100)}%
                </span>
              </div>

              <Slider
                value={[weights.outletWeight * 100]}
                min={0}
                max={100}
                step={1}
                className="cursor-pointer"
                onValueChange={(value) =>
                  handleSlider("outletWeight", value)
                }
              />

              <div className="flex justify-between mt-3 text-sm text-zinc-500">
                <span>0</span>
                <span>100</span>
              </div>
            </Card>
          </div>
        </div>

        {/* TOP 3 */}

        <div>
          <h2 className="text-4xl font-black text-white mb-8">
            Top 3 Cafe Elite 🏆
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {top3.map((cafe, index) => {
              const gradients = [
                "from-yellow-300 to-amber-500",
                "from-zinc-300 to-zinc-500",
                "from-orange-400 to-orange-700",
              ];

              return (
                <div
                  key={cafe.id}
                  className={`bg-gradient-to-br ${gradients[index]} p-[2px] rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-500`}
                >
                  <div className="bg-stone-950 rounded-[33px] overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={cafe.imageUrl}
                        alt={cafe.name}
                        className="w-full h-80 object-cover"
                      />

                      <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-xl px-5 py-2 rounded-2xl text-white font-black text-xl">
                        #{cafe.rank}
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-black text-white">
                          {cafe.name}
                        </h2>

                        <span className="text-amber-400 font-black text-xl">
                            {(cafe.score * 100).toFixed(0)}%                        </span>
                      </div>

                      <p className="text-zinc-400 mt-3">
                        {cafe.address}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mt-7">
                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-zinc-500 text-sm">
                            WiFi
                          </p>

                          <h3 className="text-white font-black text-xl mt-1">
                            {cafe.wifiSpeed}
                          </h3>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-zinc-500 text-sm">
                            Harga
                          </p>

                          <h3 className="text-white font-black text-xl mt-1">
                            Rp {cafe.averagePrice}
                          </h3>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-zinc-500 text-sm">
                            Comfort
                          </p>

                          <h3 className="text-white font-black text-xl mt-1">
                            {cafe.comfort}
                          </h3>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-zinc-500 text-sm">
                            StopKontak 
                          </p>

                          <h3 className="text-white font-black text-xl mt-1">
                            {cafe.powerOutlet}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ALL CAFE */}

        <div>
          <h2 className="text-4xl font-black text-white mb-8">
            Semua Cafe ☕
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {cafes.map((cafe) => (
              <Card
                key={cafe.id}
                className="overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] hover:border-amber-400/30 transition-all duration-500"
              >
                <img
                  src={cafe.imageUrl}
                  alt={cafe.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-black text-xl">
                      #{cafe.rank}
                    </span>

                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl font-black">
                        {(cafe.score * 100).toFixed(0)}%                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-white mt-4">
                    {cafe.name}
                  </h2>

                  <p className="text-zinc-500 mt-2">
                    {cafe.address}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm">
                        WiFi
                      </p>

                      <h3 className="text-white font-black text-lg mt-1">
                        {cafe.wifiSpeed}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm">
                        Harga
                      </p>

                      <h3 className="text-white font-black text-lg mt-1">
                        Rp {cafe.averagePrice}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm">
                        Comfort
                      </p>

                      <h3 className="text-white font-black text-lg mt-1">
                        {cafe.comfort}
                      </h3>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm">
                        Stopkontak
                      </p>

                      <h3 className="text-white font-black text-lg mt-1">
                        {cafe.powerOutlet}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* TABLE */}

        <div className="rounded-[35px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="p-8 border-b border-white/10">
            <h2 className="text-4xl font-black text-white">
              Ranking Lengkap 📊
            </h2>

            <p className="text-zinc-400 mt-3">
              Perhitungan metode SAW realtime.
            </p>
          </div>

          <div className="overflow-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left px-6 py-5 text-zinc-400">
                    Rank
                  </th>

                  <th className="text-left px-6 py-5 text-zinc-400">
                    Cafe
                  </th>

                  <th className="text-left px-6 py-5 text-zinc-400">
                    WiFi
                  </th>

                  <th className="text-left px-6 py-5 text-zinc-400">
                    Comfort
                  </th>

                  <th className="text-left px-6 py-5 text-zinc-400">
                    Harga
                  </th>

                  <th className="text-left px-6 py-5 text-zinc-400">
                    Score
                  </th>
                </tr>
              </thead>

              <tbody>
                {cafes.map((cafe) => (
                  <tr
                    key={cafe.id}
                    className="border-t border-white/5 hover:bg-white/5 transition-all"
                  >
                    <td className="px-6 py-5 text-white font-black">
                      #{cafe.rank}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={cafe.imageUrl}
                          alt={cafe.name}
                          className="w-16 h-16 rounded-2xl object-cover"
                        />

                        <div>
                          <h3 className="text-white font-bold">
                            {cafe.name}
                          </h3>

                          <p className="text-zinc-500 text-sm">
                            {cafe.address}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-white">
                      {cafe.wifiSpeed}
                    </td>

                    <td className="px-6 py-5 text-white">
                      {cafe.comfort}
                    </td>

                    <td className="px-6 py-5 text-white">
                      Rp {cafe.averagePrice}
                    </td>

                    <td className="px-6 py-5">
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-2xl font-black">
                        {(cafe.score * 100).toFixed(0)}%                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}