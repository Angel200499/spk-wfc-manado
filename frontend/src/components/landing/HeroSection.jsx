import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
        alt="Cafe"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-stone-950" />

      {/* Blur Circle */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full mb-8">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />

          <p className="text-amber-300 font-semibold tracking-[0.25em] uppercase text-sm">
            SPK Work From Cafe Manado
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
          Temukan Cafe
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-500">
            Ternyaman
          </span>

          <br />
          Untuk Produktivitasmu ☕
        </h1>

        {/* Description */}
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mt-8 max-w-3xl mx-auto">
          Sistem Pendukung Keputusan berbasis metode SAW
          yang membantu mahasiswa, freelancer, dan remote
          worker memilih tempat Work From Cafe terbaik
          berdasarkan WiFi, kenyamanan, harga,
          stopkontak, dan suasana cafe.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-5 mt-12 flex-wrap">
          <Link to="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-105 hover:from-amber-300 hover:to-orange-400 transition-all duration-300 text-black font-black px-8 py-6 rounded-2xl shadow-[0_10px_40px_rgba(251,191,36,0.35)]"
            >
              Mulai Sekarang
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size="lg"
              className="bg-white hover:bg-zinc-200 text-black font-black px-8 py-6 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Login
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-16 flex-wrap">
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl px-8 py-6">
            <h3 className="text-4xl font-black text-amber-400">
              25+
            </h3>

            <p className="text-zinc-300 mt-2">
              Cafe Terbaik
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl px-8 py-6">
            <h3 className="text-4xl font-black text-amber-400">
              SAW
            </h3>

            <p className="text-zinc-300 mt-2">
              Smart Ranking
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl px-8 py-6">
            <h3 className="text-4xl font-black text-amber-400">
              Realtime
            </h3>

            <p className="text-zinc-300 mt-2">
              Recommendation
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;