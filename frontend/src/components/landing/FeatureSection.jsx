import {
  Wifi,
  Coffee,
  BatteryCharging,
  Wallet,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    title: "WiFi Super Cepat",
    desc: "Temukan cafe dengan koneksi internet stabil untuk coding, meeting, dan streaming tanpa hambatan.",
    icon: Wifi,
  },

  {
    title: "Stopkontak Melimpah",
    desc: "Kerja lebih lama tanpa takut baterai habis dengan fasilitas outlet yang lengkap.",
    icon: BatteryCharging,
  },

  {
    title: "Harga Friendly",
    desc: "Pilih cafe terbaik sesuai budget mahasiswa, freelancer, maupun remote worker.",
    icon: Wallet,
  },

  {
    title: "Suasana Premium",
    desc: "Nikmati suasana nyaman, tenang, dan estetik untuk meningkatkan produktivitasmu.",
    icon: Coffee,
  },
];

const FeatureSection = () => {
  return (
    <section
      id="fitur"
      className="relative bg-stone-950 text-white py-28 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[0.35em] font-bold">
            Fitur Unggulan
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Kenapa Harus
            <span className="text-amber-400">
              {" "}
              WFC Manado?
            </span>
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Sistem rekomendasi cafe berbasis metode
            SAW yang membantu kamu menemukan tempat
            Work From Cafe paling ideal berdasarkan
            kebutuhan produktivitas dan kenyamanan.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.08]"
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />

              {/* ICON */}
              <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/20">
                <feature.icon
                  className="text-black"
                  size={38}
                />
              </div>

              {/* TEXT */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-black">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mt-4">
                  {feature.desc}
                </p>
              </div>

              {/* NUMBER */}
              <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;