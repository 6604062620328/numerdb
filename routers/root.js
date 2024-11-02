import express from "express";
const router = express.Router();

import { create, list, readsol } from "../controllers/root.js";
import { createIT, listIT } from "../controllers/intregrate.js";

/**
 * @swagger
 * /root:
 *   get:
 *     summary: Get all root entries
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   solution:
 *                     type: string
 *                   equation:
 *                     type: string
 *                   xStart:
 *                     type: number
 *                   xEnd:
 *                     type: number
 *                   error:
 *                     type: number
 *                   result:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time the entry was created
 *       500:
 *         description: Error
 */

/**
 * @swagger
 * /root:
 *   post:
 *     summary: save data to root
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   solution:
 *                     type: string
 *                   equation:
 *                     type: string
 *                   xStart:
 *                     type: number
 *                   xEnd:
 *                     type: number
 *                   error:
 *                     type: number
 *                   result:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time the entry was created
 *       500:
 *         description: Error
 */


router.get("/root", list);

/**
 * @swagger
 * /api/root:
 *   post:
 *     summary: สร้างข้อมูล root ใหม่
 *     description: สร้างข้อมูล root ใหม่ลงในฐานข้อมูล
 *     tags:
 *       - "Root"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               solution:
 *                 type: string
 *                 description: "ชื่อ solution"
 *               equation:
 *                 type: string
 *                 description: สมการ
 *               xStart:
 *                 type: number
 *                 description: ค่าเริ่มต้นของ x
 *               xEnd:
 *                 type: number
 *                 description: ค่าสิ้นสุดของ x จะใส่หรือไม่ใส่ก็ได้
 *               error:
 *                 type: number
 *                 format: float
 *                 description: ค่า error ที่ต้องการ
 *               result:
 *                 type: number
 *                 format: float
 *                 description: คำตอบของ root
 *               createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time the entry was created
 *             required:
 *               - solution
 *               - xstart
 *               - xend
 *               - equation
 *               - error
 *               - result
 *     responses:
 *       '200':
 *         description: สร้างข้อมูล root ใหม่สำเร็จ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 newdataroot:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: "ID of the created root entry"
 *                     solution:
 *                       type: string
 *                     equation:
 *                       type: string
 *                     xStart:
 *                       type: number
 *                     xEnd:
 *                       type: number
 *                     error:
 *                       type: number
 *                     result:
 *                       type: number
 *       '500':
 *         description: มีข้อผิดพลาดในการสร้างข้อมูล root ใหม่
 */

/*router.post("/root", create);
router.get("/root/:solution", readsol);*/

router.post("/intregrate", createIT);
router.get("/intregrate", listIT);

export default router;