const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="bg-stone-900 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <p className="text-amber-400 uppercase tracking-[0.3em] font-bold">
            Tentang
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-6 leading-tight">
            Solusi Modern
            <span className="text-amber-400">
              {" "}
              Work From Cafe
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mt-8">
            WFC Manado adalah platform Sistem
            Pendukung Keputusan berbasis metode
            SAW yang membantu pengguna menemukan
            cafe paling ideal untuk bekerja,
            belajar, meeting, maupun menikmati
            suasana produktif di Kota Manado.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            Sistem ini melakukan perhitungan
            berdasarkan beberapa kriteria utama
            seperti kecepatan WiFi, jumlah
            stopkontak, tingkat kenyamanan,
            harga menu, tingkat kebisingan,
            hingga jam operasional cafe.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            Dengan tampilan modern dan proses
            ranking otomatis, pengguna dapat
            menemukan cafe terbaik secara cepat
            dan efisien tanpa harus mencoba satu
            per satu tempat secara langsung.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-5">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-72 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-72 object-cover w-full mt-12"
          />

          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-72 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-72 object-cover w-full mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;