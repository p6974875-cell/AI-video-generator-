import { Router } from "express";
import { generateVideo } from "../controllers/videoController";

const router = Router();

router.post("/generate", generateVideo);

export default router;
