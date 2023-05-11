import { Router } from "express";
import { clientsRoutes } from "./clients";

export const routes = Router();

routes.use('/clients', clientsRoutes);
