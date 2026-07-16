import express from "express";
import { getCompany } from "../controllers/companyControllers";

const router = express.Router();

router.get("/",getCompany);

export default router;