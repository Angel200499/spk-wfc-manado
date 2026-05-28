import { useEffect, useState } from "react";
import api from "@/services/api";

import DashboardLayout from "@/layouts/DashboardLayout";

export default function RecommendationPage() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetchCafe();
  }, []);

  const fetchCafe = async () => {
    try {

      // FIX ENDPOINT
      const res = await api.get("/api/cafes");

      setCafes(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-5xl font-black text-white mb-10">
          Recommendation Cafe ☕
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cafes.map((cafe) => (
            <div
              key={cafe.id}
              className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden"
            >
              <img
                src={cafe.imageUrl}
                alt={cafe.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-black text-white">
                  {cafe.name}
                </h2>

                <p className="text-zinc-400 mt-2">
                  {cafe.address}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <p className="text-zinc-400 text-sm">
                      WiFi
                    </p>

                    <h3 className="text-white font-black">
                      {cafe.wifiSpeed}
                    </h3>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl">
                    <p className="text-zinc-400 text-sm">
                      Comfort
                    </p>

                    <h3 className="text-white font-black">
                      {cafe.comfort}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}