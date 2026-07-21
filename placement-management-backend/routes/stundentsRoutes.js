import express from "express";
import { getStudents, getStudentsById, addstudent, UpdateStudent, deleteStudent, searchstudents } from "../controllers/studentsController.js";
// Router object 
const router = express.Router();

router.get("/",getStudents);
router.get("/:id",getStudentsById);
router.post("/",addstudent);
router.put("/:id",UpdateStudent);
router.delete("/:id",deleteStudent)

router.get("/search",searchstudents);

export default router;