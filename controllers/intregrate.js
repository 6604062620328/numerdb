import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_PRISMA_URL, // ใช้ environment variable ในการเชื่อมต่อฐานข้อมูล
    },
  },
});


export const createIT = async (req, res) => {
  try {
    const { solution, aValue, bValue,Equation,hValue,result } = req.body;

    // ตรวจสอบ input
    if (!solution || !aValue ||!bValue || !Equation ||!hValue|| !result) {
      return res.status(400).send("Invalid input data");
    }

    const newdataintregrate = await prisma.intregrate.create({
      data: {
        solution: solution,
        aValue: Number(aValue),
        bValue: Number(bValue),
        Equation: Equation,
        error: parseFloat(hValue),
        result: parseFloat(result),
      },
    });
    res.json({ newdataintregrate });
  } catch (err) {
    console.error(err); // Log ข้อความ error เพื่อการ debug
    res.status(500).send(`Error: ${err.message}`);
  }
};


export const listIT = async (req, res) => {
    try {
      console.log("Fetching data from the intregrate model...");
      const alldata = await prisma.intregrate.findMany();
      console.log("Data fetched successfully:", alldata);
      res.json(alldata);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      res.status(500).send(`Error: ${error.message}`);
    }
  };
  

// ฟังก์ชันค้นหาข้อมูลด้วย solution

// รองรับการปิดการเชื่อมต่อเมื่อแอปปิดตัว
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
