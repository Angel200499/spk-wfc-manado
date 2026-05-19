import prisma from "../prisma/prismaClient.js";

export const calculateSAW = async (req, res) => {
  try {
    let {
      wifiWeight,
      outletWeight,
      comfortWeight,
      noiseWeight,
      priceWeight,
      hoursWeight,
    } = req.body;

    // =========================
    // DEFAULT VALUE
    // =========================

    wifiWeight = Number(wifiWeight ?? 0.3);
    outletWeight = Number(outletWeight ?? 0.2);
    comfortWeight = Number(comfortWeight ?? 0.2);
    noiseWeight = Number(noiseWeight ?? 0.1);
    priceWeight = Number(priceWeight ?? 0.1);
    hoursWeight = Number(hoursWeight ?? 0.1);

    // =========================
    // WEIGHTS
    // =========================

    const weights = {
      wifi: wifiWeight,
      outlet: outletWeight,
      comfort: comfortWeight,
      noise: noiseWeight,
      price: priceWeight,
      hours: hoursWeight,
    };

    // =========================
    // GET DATA CAFE
    // =========================

    const cafes = await prisma.cafe.findMany();

    // =========================
    // VALIDASI
    // =========================

    if (!cafes || cafes.length === 0) {
      return res.status(404).json({
        message: "Data cafe kosong",
      });
    }

    // =========================
    // MAX & MIN
    // =========================

    const maxWifi = Math.max(
      ...cafes.map((c) => c.wifiSpeed)
    );

    const maxOutlet = Math.max(
      ...cafes.map((c) => c.powerOutlet)
    );

    const maxComfort = Math.max(
      ...cafes.map((c) => c.comfort)
    );

    const minNoise = Math.min(
      ...cafes.map((c) => c.noiseLevel)
    );

    const minPrice = Math.min(
      ...cafes.map((c) => c.averagePrice)
    );

    const maxHours = Math.max(
      ...cafes.map((c) => c.openHours)
    );

    // =========================
    // HITUNG SAW
    // =========================

    const results = cafes.map((cafe) => {
      // BENEFIT
      const wifiScore =
        cafe.wifiSpeed / maxWifi;

      const outletScore =
        cafe.powerOutlet / maxOutlet;

      const comfortScore =
        cafe.comfort / maxComfort;

      const hoursScore =
        cafe.openHours / maxHours;

      // COST
      const noiseScore =
        minNoise / cafe.noiseLevel;

      const priceScore =
        minPrice / cafe.averagePrice;

      // =========================
      // FINAL SCORE
      // =========================

      const finalScore =
        (wifiScore * (wifiWeight || 0)) +
        (outletScore * (outletWeight || 0)) +
        (comfortScore * (comfortWeight || 0)) +
        (noiseScore * (noiseWeight || 0)) +
        (priceScore * (priceWeight || 0)) +
        (hoursScore * (hoursWeight || 0));

      return {
        ...cafe,

        score: Number(finalScore.toFixed(4)),
      };
    });

    // =========================
    // SORT DESC
    // =========================

    results.sort((a, b) => b.score - a.score);

    // =========================
    // ADD RANK
    // =========================

    const ranked = results.map(
      (item, index) => ({
        ...item,
        rank: index + 1,
      })
    );

    // =========================
    // RESPONSE
    // =========================

    res.status(200).json(ranked);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Gagal menghitung SAW",
      error: error.message,
    });
  }
};