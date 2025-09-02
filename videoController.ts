import { Request, Response } from "express";
import { callReplicate } from "../services/replicateService";

export const generateVideo = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt required" });

    const result = await callReplicate(prompt);
    res.json({ success: true, result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
