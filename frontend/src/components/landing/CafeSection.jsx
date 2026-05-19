const cafes = [
  {
    name: "Starbucks Megamas",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop",
  },

  {
    name: "Fore Coffee",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
  },

  {
    name: "Janji Jiwa",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop",
  },
];

const CafeSection = () => {
  return (
    <section
      id="cafe"
      className="bg-stone-950 text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-amber-400 uppercase tracking-[0.3em] font-bold">
            Cafe Pilihan
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-5">
            Tempat Nongkrong
            <span className="text-amber-400">
              {" "}
              Favorit
            </span>
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Beberapa cafe populer yang cocok
            untuk Work From Cafe di Manado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {cafes.map((cafe, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={cafe.image}
                alt={cafe.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {cafe.name}
                </h3>

                <p className="text-zinc-400 mt-3">
                  Cafe nyaman dengan suasana
                  estetik dan cocok untuk
                  produktivitas.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CafeSection;