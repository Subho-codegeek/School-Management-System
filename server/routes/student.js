import express from "express";
import { getStudents, createStudents, deleteStudent } from "../controllers/student.js";


const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);

export default router;