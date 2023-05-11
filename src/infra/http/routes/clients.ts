import { Router } from "express";
import { makeListClientsController } from "../factories/controllers/makeListClientsController";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";

export const clientsRoutes = Router();

clientsRoutes.get("/list", expressRouteAdapter(makeListClientsController()))
