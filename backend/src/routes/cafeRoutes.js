import express from "express";

import {
  getCafes,
  createCafe,
  updateCafe,
  deleteCafe,
} from "../controllers/cafeController.js";

const router = express.Router();

// GET ALL
router.get("/", getCafes);

// CREATE
router.post("/", createCafe);

// UPDATE
router.put("/:id", updateCafe);

// DELETE
router.delete("/:id", deleteCafe);

export default router;