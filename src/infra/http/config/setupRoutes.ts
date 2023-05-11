import { Application } from "express";
import { routes } from "../routes";

export async function setupRoutes(app: Application) {
  app.use(routes)
}