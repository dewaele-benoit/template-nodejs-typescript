import express from "express";
import { addController } from "../controllers/maths.controller";
const router = express.Router();

/**
 * Route for adding 2 numbers
 */
router.get("/add/:a/:b", (req, res, next) => addController(res, req, next));

export default router;
