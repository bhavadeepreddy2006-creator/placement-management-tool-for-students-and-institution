import express from "express";
import { gethome } from "../controllers/homeControllers.js";

const router = express.Router();

router.get("/",gethome);

export default router;