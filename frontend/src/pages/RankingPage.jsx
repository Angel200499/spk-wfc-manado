import { useEffect, useState } from "react";

import api from "@/services/api";

import DashboardLayout from "@/layouts/DashboardLayout";

export default function RankingPage() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const res = await api.post("/saw", {
        wifiWeight: 0.25,
        outletWeight: 0.2,
        comfortWeight: 0.25,
        noiseWeight: 0.1,
        priceWeight: 0.1,
        hoursWeight: 0.1,
      });

      setCafes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-5xl font-black text-white mb-10">
          Ranking Cafe 🏆
        </h1>

        <div className="space-y-5">
          {cafes.map((cafe) => (
            <div
              key={cafe.id}
              className="bg-white/5 border border-white/10 rounded-[30px] p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <div className="text-4xl font-black text-amber-400">
                  #{cafe.rank}
                </div>

                <img
                  src={cafe.imageUrl}
                  alt={cafe.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>
                  <h2 className="text-2xl font-black text-white">
                    {cafe.name}
                  </h2>

                  <p className="text-zinc-400">
                    {cafe.address}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-zinc-400">
                  Final Score
                </p>

                <h2 className="text-4xl font-black text-amber-400">
                {(cafe.score * 100).toFixed(0)}%                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}