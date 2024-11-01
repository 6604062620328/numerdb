import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const create = async (req, res) => {
  try {
    const { solution, equation, xStart, xEnd,error, result } = req.body;
    const newdataroot = await prisma.root.create({
      data: {
        solution: solution,
        equation: equation,
        xStart: Number(xStart),
        xEnd: Number(xEnd),
        error: parseFloat(error),
        result: parseFloat(result),
      },
    });
    res.json({ newdataroot });
  } catch (err) {
    res.status(500).send("Error");
  }
};

export const list = async (req, res) => {
  try {
    const alldata = await prisma.root.findMany();
    res.json(alldata);
  } catch (error) {
    res.status(500).send("error");
  }
};

export const readsol = async (req, res) => {
  try {
    const { solution } = req.params;
    const roots = await prisma.root.findMany({
      where: {
        solution: solution,
      },
    });
    res.json(roots);
  } catch (error) {
    res.status(500).send("error");
  }
};