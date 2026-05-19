import express from "express";
import { calculateSAW } from "../controllers/sawController.js";

const router = express.Router();

router.post("/", calculateSAW);

export default router;