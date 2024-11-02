import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_PRISMA_URL, // ใช้ environment variable ในการเชื่อมต่อฐานข้อมูล
    },
  },
});

// ฟังก์ชันสร้างข้อมูลใหม่
export const create = async (req, res) => {
  try {
    const { solution, equation, xStart, xEnd, error, result } = req.body;

    // ตรวจสอบ input
    if (!solution || !equation || isNaN(xStart) || isNaN(xEnd) || isNaN(error) || isNaN(result)) {
      return res.status(400).send("Invalid input data");
    }

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
    console.error(err); // Log ข้อความ error เพื่อการ debug
    res.status(500).send(`Error: ${err.message}`);
  }
};

// ฟังก์ชันดึงข้อมูลทั้งหมด
export const list = async (req, res) => {
  try {
    const alldata = await prisma.intregrate.findMany();
    res.json(alldata);
  } catch (error) {
    console.error(error); // Log ข้อความ error เพื่อการ debug
    res.status(500).send(`Error: ${error.message}`);
  }
};

// ฟังก์ชันค้นหาข้อมูลด้วย solution
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
    console.error(error); // Log error for debugging
    res.status(500).send(`Error: ${error.message}`);
  }
};


// รองรับการปิดการเชื่อมต่อเมื่อแอปปิดตัว
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
