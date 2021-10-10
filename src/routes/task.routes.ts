import { TaskController } from "../controllers/TaskController";
import { Router } from "express";

const router = Router();

router.get("/", TaskController.getTasks);
router.get("/:taskId", TaskController.getTask);
router.post("/", TaskController.createTask);
router.put("/:taskId", TaskController.editTask);
router.delete("/:taskId", TaskController.deleteTask);

export default router;
