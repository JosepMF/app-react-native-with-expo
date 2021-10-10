import { Request, Response } from "express";
import { TaskI } from "../interfaces/TaskI";
import { Task } from "../models/Task";

export class TaskController {
  public static async getTasks(req: Request, res: Response): Promise<Response> {
    try {
      const q = await Task.getTasks();
      return res.status(200).json({ tasks: q });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error 500" });
    }
  }

  public static async getTask(req: Request, res: Response): Promise<Response> {
    try {
      const task = await Task.getTask(req.params.taskId);
      return res.status(200).json({ task });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error 500" });
    }
  }

  public static async createTask(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const taskReq: TaskI = req.body;
      const task = new Task(taskReq.title, taskReq.description);
      await task.saveTask();
      return res.status(200).json({ message: "task was created" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error 500" });
    }
  }

  public static async editTask(req: Request, res: Response): Promise<Response> {
    try {
      const taskReq: TaskI = req.body;
      await Task.editTask(taskReq.title, taskReq.description, req.params.taskId);
      return res
        .status(200)
        .json({ message: "the task was edited succesfuly" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error 500" });
    }
  }

  public static async deleteTask(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      await Task.deleteTask(req.params.taskId);
      return res
        .status(200)
        .json({ message: "the task was deleted succesfuly" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error 500" });
    }
  }
}
