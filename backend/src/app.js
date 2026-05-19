import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import sawRoutes from "./routes/sawRoutes.js";
import cafeRoutes from "./routes/cafeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/weather", weatherRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/saw", sawRoutes);
app.use("/api/cafes", cafeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API SPK WFC MANADO BERJALAN",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});