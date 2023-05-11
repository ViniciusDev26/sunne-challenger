import { Request, Response } from "express";
import { Controller } from "../core/Controller";

export function expressRouteAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = { ...req.headers, ...req.body, ...req.params, ...req.query }
    const response = await controller.handle(request);

    res.json(response)
  }

}