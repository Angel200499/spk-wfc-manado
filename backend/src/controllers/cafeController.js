import prisma from "../prisma/prismaClient.js";

// GET ALL
export const getCafes = async (req, res) => {
  try {
    const cafes = await prisma.cafe.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(cafes);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal mengambil cafe",
    });
  }
};

// CREATE
export const createCafe = async (req, res) => {
  try {
    const cafe = await prisma.cafe.create({
      data: req.body,
    });

    res.status(201).json(cafe);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal menambah cafe",
    });
  }
};

// UPDATE
export const updateCafe = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await prisma.cafe.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json(updated);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal update cafe",
    });
  }
};

// DELETE
export const deleteCafe = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.cafe.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Cafe berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Gagal menghapus cafe",
    });
  }
};