import express from "express";
import { getStudents, getStudnetById, addstudent, UpdateStudent, deleteStudent } from "../controllers/studentsController.js";
// Router object 
const router = express.Router();

router.get("/",getStudents);
router.get("/:id",getStudnetById);
router.post("/",addstudent);
router.put("/:id",UpdateStudent);
router.delete("/:id",deleteStudent)
export default router;