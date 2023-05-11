import { Controller } from "@shared/core/Controller";
import { NextFunction, Request, Response } from "express";

export function expressRouteAdapter(controller: Controller) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const request = { ...req.headers, ...req.body, ...req.params, ...req.query }
      const response = await controller.handle(request);
  
      res.json(response)
    } catch (err) {
      next(err)
    }
  }
}