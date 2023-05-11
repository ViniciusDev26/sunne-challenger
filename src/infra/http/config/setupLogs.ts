import { Application } from "express";
import morgan from "morgan"

export async function setupLogs(app: Application) {
  app.use(morgan("dev"))  
}