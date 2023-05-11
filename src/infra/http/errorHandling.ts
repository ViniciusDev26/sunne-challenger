import { NextFunction, Request, Response } from "express";

export function errorHandling(err: Error, req: Request, res: Response, next: NextFunction) {
  if(err.name === "NotFoundError") {
    res.status(401)
  }else {
    res.status(500)
  }

  res.json({ error: err.message })
}