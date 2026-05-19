import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.cafe.deleteMany();

  await prisma.cafe.createMany({
    data: [
      {
        name: "Starbucks Megamas",
        address: "Megamas Manado",
        imageUrl:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 85,
        powerOutlet: 7,
        comfort: 9.4,
        noiseLevel: 7,
        averagePrice: 55000,
        openHours: 16,
      },

      {
        name: "Fore Coffee Manado",
        address: "Boulevard Manado",
        imageUrl:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 96,
        powerOutlet: 9,
        comfort: 9.6,
        noiseLevel: 3,
        averagePrice: 32000,
        openHours: 18,
      },

      {
        name: "Kopi Kenangan",
        address: "Megamall Manado",
        imageUrl:
          "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 82,
        powerOutlet: 6,
        comfort: 8.2,
        noiseLevel: 6,
        averagePrice: 25000,
        openHours: 14,
      },

      {
        name: "Janji Jiwa Boulevard",
        address: "Boulevard 2",
        imageUrl:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 84,
        powerOutlet: 6,
        comfort: 8.3,
        noiseLevel: 5,
        averagePrice: 24000,
        openHours: 14,
      },

      {
        name: "Tomoro Coffee",
        address: "Pusat Kota Manado",
        imageUrl:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 92,
        powerOutlet: 8,
        comfort: 9.2,
        noiseLevel: 4,
        averagePrice: 33000,
        openHours: 16,
      },

      {
        name: "Excelso Mantos",
        address: "Manado Town Square",
        imageUrl:
          "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 78,
        powerOutlet: 6,
        comfort: 8.9,
        noiseLevel: 6,
        averagePrice: 45000,
        openHours: 15,
      },

      {
        name: "Daily Bread",
        address: "Tikala",
        imageUrl:
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 75,
        powerOutlet: 5,
        comfort: 8,
        noiseLevel: 5,
        averagePrice: 22000,
        openHours: 12,
      },

      {
        name: "Jarod Coffee",
        address: "Malalayang",
        imageUrl:
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop",
        wifiSpeed: 91,
        powerOutlet: 8,
        comfort: 9,
        noiseLevel: 4,
        averagePrice: 27000,
        openHours: 15,
      },

      {
        name: "Casa Bake",
        address: "Megamas",
        imageUrl:
          "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 87,
        powerOutlet: 7,
        comfort: 9.1,
        noiseLevel: 4,
        averagePrice: 30000,
        openHours: 14,
      },

      {
        name: "Wake Cup",
        address: "Sario",
        imageUrl:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 98,
        powerOutlet: 10,
        comfort: 9.8,
        noiseLevel: 2,
        averagePrice: 36000,
        openHours: 24,
      },

      {
        name: "Coding Coffee",
        address: "Area Kampus",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 100,
        powerOutlet: 10,
        comfort: 10,
        noiseLevel: 1,
        averagePrice: 28000,
        openHours: 24,
      },

      {
        name: "DevSpace Cafe",
        address: "Wanea",
        imageUrl:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 99,
        powerOutlet: 10,
        comfort: 10,
        noiseLevel: 1,
        averagePrice: 34000,
        openHours: 24,
      },

      {
        name: "WorkNest Cafe",
        address: "Boulevard",
        imageUrl:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 97,
        powerOutlet: 10,
        comfort: 9.9,
        noiseLevel: 2,
        averagePrice: 35000,
        openHours: 24,
      },

      {
        name: "Black Cup",
        address: "Tikala",
        imageUrl:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 86,
        powerOutlet: 7,
        comfort: 8.6,
        noiseLevel: 5,
        averagePrice: 24000,
        openHours: 14,
      },

      {
        name: "Point Cafe",
        address: "Paal Dua",
        imageUrl:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 72,
        powerOutlet: 5,
        comfort: 7.7,
        noiseLevel: 6,
        averagePrice: 18000,
        openHours: 12,
      },

      {
        name: "Manado Brew",
        address: "Megamas",
        imageUrl:
          "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop",
        wifiSpeed: 90,
        powerOutlet: 8,
        comfort: 9.3,
        noiseLevel: 4,
        averagePrice: 31000,
        openHours: 16,
      },

      {
        name: "Sunset Coffee",
        address: "Pantai Malalayang",
        imageUrl:
          "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 81,
        powerOutlet: 5,
        comfort: 9.5,
        noiseLevel: 3,
        averagePrice: 26000,
        openHours: 15,
      },

      {
        name: "Roemah Kopi",
        address: "Mapanget",
        imageUrl:
          "https://images.unsplash.com/photo-1513267048331-5611cad62e41?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 70,
        powerOutlet: 4,
        comfort: 7.5,
        noiseLevel: 5,
        averagePrice: 17000,
        openHours: 12,
      },

      {
        name: "Tepi Laut Cafe",
        address: "Boulevard Tepi Laut",
        imageUrl:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 77,
        powerOutlet: 5,
        comfort: 8.7,
        noiseLevel: 6,
        averagePrice: 23000,
        openHours: 13,
      },

      {
        name: "Koffie House",
        address: "Karombasan",
        imageUrl:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 68,
        powerOutlet: 4,
        comfort: 7.4,
        noiseLevel: 6,
        averagePrice: 16000,
        openHours: 11,
      },

      {
        name: "Sky Dine Cafe",
        address: "Rooftop Boulevard",
        imageUrl:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop",
        wifiSpeed: 89,
        powerOutlet: 8,
        comfort: 9.8,
        noiseLevel: 4,
        averagePrice: 42000,
        openHours: 18,
      },

      {
        name: "Nilu Coffee",
        address: "Tuminting",
        imageUrl:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2074&auto=format&fit=crop",
        wifiSpeed: 79,
        powerOutlet: 6,
        comfort: 8.2,
        noiseLevel: 5,
        averagePrice: 22000,
        openHours: 13,
      },

      {
        name: "Dabu Dabu Cafe",
        address: "Wenang",
        imageUrl:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 65,
        powerOutlet: 4,
        comfort: 7.2,
        noiseLevel: 7,
        averagePrice: 15000,
        openHours: 12,
      },

      {
        name: "Level Cafe",
        address: "Sario",
        imageUrl:
          "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop",
        wifiSpeed: 90,
        powerOutlet: 8,
        comfort: 9.1,
        noiseLevel: 4,
        averagePrice: 26000,
        openHours: 15,
      },

      {
        name: "Kopination",
        address: "Megamas",
        imageUrl:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        wifiSpeed: 88,
        powerOutlet: 7,
        comfort: 8.8,
        noiseLevel: 5,
        averagePrice: 28000,
        openHours: 14,
      },
    ],
  });

  console.log("Seed berhasil 🔥");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });