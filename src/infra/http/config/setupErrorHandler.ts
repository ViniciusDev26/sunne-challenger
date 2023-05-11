import { errorHandling } from "../errorHandling";
import { Express } from "express";

export async function setupErrorHandler(app: Express) {
  app.use(errorHandling)
}