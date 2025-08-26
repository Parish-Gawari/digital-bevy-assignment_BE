import express from "express";
import { searchGithub, getUserSearches } from "../controllers/searchController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, searchGithub);
router.get("/history", authMiddleware, getUserSearches);

export default router;
